import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { fs, path } from "@vuepress/utils";
import { Plugin } from "@vuepress/core";
import Token from "markdown-it/lib/token";
import container from "markdown-it-container";
import findEamplesFolderDir from "../utils/findEamplesFolderDir";
import { ComponentsRegister } from "./ComponentsRegister";
import TransComponentName from "../utils/transComponentName";
import Highlight from "../utils/highlight";

export default function DemoBlockPlugin(option?: Option): Plugin {
    return (app) => {
        const componentsRegister = new ComponentsRegister(app);
        return {
            name: "@ddong/vuepress-plugin-demo-block",
            clientConfigFile: () => {
                return componentsRegister.WriteTempFile();
                /* return path.resolve(__dirname, "./client/config.js"); */
            },

            onInitialized() {
                componentsRegister.Push({ name: "demo", path: path.resolve(dirname(fileURLToPath(import.meta.url)), "./public/Demo.vue") });
            },

            extendsMarkdown: (md) => {
                md.use(container, "demo", {
                    validate: function (params: string) {
                        /* console.log(params);
                        console.log(params.trim());
                        console.log(params.trim().match(/^demo\s*(.*)$/)); */
                        // 匹配demo的开标签和闭合标签
                        return params.trim().match(/^demo\s*(.*)$/);
                    },

                    render: function (tokens: Token[], idx: number) {
                        /* // nest===1 防止拿到 demo的闭合标签的token后面第二个的token
                        // 应该拿到 demo开标签 -> p 开标签 -> inline内容 level=2(p标签内容)
                        if (tokens[idx].nesting === 1) console.log(tokens[idx + 2].content);
                        // 拿到含有demo的token */
                        const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);

                        if (tokens[idx].nesting === 1) {
                            // opening tag，
                            const info = m && m[1] || "";
                            // 预注册所有demo组件
                            const demoName = TransComponentName(tokens[idx + 2].content);
                            const demoPath = path.resolve(
                                option?.examplesPath ?? findEamplesFolderDir(__dirname),
                                tokens[idx + 2].content + ".vue"
                            );
                            componentsRegister.Push({ name: demoName, path: demoPath });
                            // 代码高亮
                            const demoCode = fs.readFileSync(demoPath).toString();
                            return `<demo
                                    component=${demoName}
                                    code="${encodeURIComponent(demoCode)}"
                                    codeHighlight="${encodeURIComponent(Highlight(demoCode))}"
                                    info="${encodeURIComponent(md.render(info))}">`;
                        } else {
                            // closing tag
                            return "</demo>\n";
                        }
                    },
                });
            },
        };
    };
}

type Option = {
    examplesPath?: string;
};
