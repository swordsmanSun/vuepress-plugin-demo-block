"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  demoBlockPlugin: () => DemoBlockPlugin
});
module.exports = __toCommonJS(src_exports);

// src/node/demoBlockPlugin.ts
var import_path2 = require("path");
var import_url = require("url");
var import_utils2 = require("@vuepress/utils");
var import_markdown_it_container = __toESM(require("markdown-it-container"));

// src/utils/findEamplesFolderDir/index.ts
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
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
    const folders = import_fs.default.readdirSync(dirs[0]);
    for (let i = 0; i < folders.length; i++) {
      dir = import_path.default.resolve(dirs[0], folders[i]);
      if (folders[i].toLowerCase() === "examples")
        return dir;
      if (import_fs.default.statSync(dir).isDirectory())
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
var import_utils = require("@vuepress/utils");
function TransComponentName(fileName) {
  return import_utils.path.trimExt(fileName.replace(/\//g, "-"));
}

// src/utils/highlight/index.ts
var import_prismjs = __toESM(require("prismjs"));
var import_prismjs2 = __toESM(require("prismjs"));
var import_components = __toESM(require("prismjs/components/index.js"));
function Highlight(code) {
  (0, import_components.default)(["markup"]);
  code = import_prismjs2.default.highlight(code, import_prismjs.default.languages.markup, "markup");
  return wrap(code);
}
function wrap(code) {
  return `<pre v-pre><code>${code}</code></pre>`;
}

// src/node/demoBlockPlugin.ts
var import_markdown_it = __toESM(require("markdown-it"));
var import_meta = {};
function DemoBlockPlugin(option) {
  return (app) => {
    const componentsRegister = new ComponentsRegister(app);
    return {
      name: "@ddong/vuepress-plugin-demo-block",
      clientConfigFile: () => {
        return componentsRegister.WriteTempFile();
      },
      onInitialized() {
        componentsRegister.Push({ name: "demo", path: import_utils2.path.resolve((0, import_path2.dirname)((0, import_url.fileURLToPath)(import_meta.url)), "./public/Demo.vue") });
      },
      extendsMarkdown: (md) => {
        md.use(import_markdown_it_container.default, "demo", {
          validate: function(params) {
            return params.trim().match(/^demo\s*(.*)$/);
          },
          render: function(tokens, idx) {
            const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
            if (tokens[idx].nesting === 1) {
              const info = m && m[1] || "";
              const demoName = TransComponentName(tokens[idx + 2].content);
              const demoPath = import_utils2.path.resolve(
                (option == null ? void 0 : option.examplesPath) ?? FindExamplesFolderDir(__dirname),
                tokens[idx + 2].content + ".vue"
              );
              componentsRegister.Push({ name: demoName, path: demoPath });
              const demoCode = import_utils2.fs.readFileSync(demoPath).toString();
              return `<demo
                                    component=${demoName}
                                    code="${encodeURIComponent(demoCode)}"
                                    codeHighlight="${encodeURIComponent(Highlight(demoCode))}"
                                    info="${encodeURIComponent((0, import_markdown_it.default)().render(info))}">`;
            } else {
              return "</demo>\n";
            }
          }
        });
      }
    };
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  demoBlockPlugin
});
