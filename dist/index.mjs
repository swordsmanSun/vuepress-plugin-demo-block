var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// src/node/demoBlockPlugin.ts
import { dirname } from "path";
import { fileURLToPath } from "url";
import { fs as fs2, path as path3 } from "@vuepress/utils";
import container from "markdown-it-container";

// src/utils/findEamplesFolderDir/index.ts
import fs from "fs";
import path from "path";
function FindExamplesFolderDir(dir) {
  const docsDir = findDocsFolderDir(dir);
  const examplesDir = breadthTraversal(docsDir);
  return examplesDir;
}
function findDocsFolderDir(dir) {
  const res = dir.match(/(.*docs)/i);
  if (res)
    return res[0];
  throw Error("can not find docs folder, does it exist? you can specify the example directory");
}
function breadthTraversal(dir) {
  let counter = 0;
  const dirs = [dir];
  while (dirs.length > 0 && counter < 200) {
    const folders = fs.readdirSync(dirs[0]);
    for (let i = 0; i < folders.length; i++) {
      dir = path.resolve(dirs[0], folders[i]);
      if (folders[i].toLowerCase() === "examples")
        return dir;
      if (fs.statSync(dir).isDirectory())
        dirs.push(dir);
    }
    dirs.shift();
    counter++;
  }
  return "";
}

// src/node/ComponentsRegister.ts
var _components, _app;
var ComponentsRegister = class {
  constructor(app) {
    __privateAdd(this, _components, []);
    __privateAdd(this, _app, void 0);
    __privateSet(this, _app, app);
  }
  Push(component) {
    for (let i = 0; i < __privateGet(this, _components).length; i++) {
      if (__privateGet(this, _components)[i].name === component.name) {
        return;
      }
    }
    __privateGet(this, _components).push(component);
  }
  Show() {
    console.log(__privateGet(this, _components));
  }
  WriteTempFile() {
    const fileText = `
        import { defineAsyncComponent } from "vue";
        export default {
            enhance({ app }) {
                ${__privateGet(this, _components).map((component) => {
      return `app.component("${component.name}", defineAsyncComponent(() => import("${component.path}")))`;
    }).join(";\n")}
            }
        }
        `;
    return __privateGet(this, _app).writeTemp(`register-components/clientEnhance..js`, fileText);
  }
};
_components = new WeakMap();
_app = new WeakMap();

// src/utils/transComponentName/index.ts
import { path as path2 } from "@vuepress/utils";
function TransComponentName(fileName) {
  return path2.trimExt(fileName.replace(/\//g, "-"));
}

// src/utils/highlight/index.ts
import Prism from "prismjs";
import prism from "prismjs";
import loadLanguages from "prismjs/components/index.js";
function Highlight(code) {
  loadLanguages(["markup"]);
  code = prism.highlight(code, Prism.languages.markup, "markup");
  return wrap(code);
}
function wrap(code) {
  return `<pre v-pre><code>${code}</code></pre>`;
}

// src/node/demoBlockPlugin.ts
import MarkdownIt from "markdown-it";
function DemoBlockPlugin(option) {
  return (app) => {
    const componentsRegister = new ComponentsRegister(app);
    return {
      name: "@ddong/vuepress-plugin-demo-block",
      clientConfigFile: () => {
        return componentsRegister.WriteTempFile();
      },
      onInitialized() {
        componentsRegister.Push({ name: "demo", path: path3.resolve(dirname(fileURLToPath(import.meta.url)), "./public/Demo.vue") });
      },
      extendsMarkdown: (md) => {
        md.use(container, "demo", {
          validate: function(params) {
            return params.trim().match(/^demo\s*(.*)$/);
          },
          render: function(tokens, idx) {
            const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
            if (tokens[idx].nesting === 1) {
              const info = m && m[1] || "";
              const demoName = TransComponentName(tokens[idx + 2].content);
              const demoPath = path3.resolve(
                (option == null ? void 0 : option.examplesPath) ?? FindExamplesFolderDir(__dirname),
                tokens[idx + 2].content + ".vue"
              );
              componentsRegister.Push({ name: demoName, path: demoPath });
              const demoCode = fs2.readFileSync(demoPath).toString();
              return `<demo
                                    component=${demoName}
                                    code="${encodeURIComponent(demoCode)}"
                                    codeHighlight="${encodeURIComponent(Highlight(demoCode))}"
                                    info="${encodeURIComponent(MarkdownIt().render(info))}">`;
            } else {
              return "</demo>\n";
            }
          }
        });
      }
    };
  };
}
export {
  DemoBlockPlugin as demoBlockPlugin
};
