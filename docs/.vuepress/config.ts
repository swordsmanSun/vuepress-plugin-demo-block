import { defaultTheme, defineUserConfig } from "vuepress";
import path from "path"
import { demoBlockPlugin } from "../../dist/index.mjs";

export default defineUserConfig({
    base: "/vuepress-plugin-demo-block/",
    plugins: [demoBlockPlugin({ examplesPath: path.resolve(__dirname, "../examples") })],
    title: "vuepress-plugin-demo-code",
    theme: defaultTheme({
        navbar: [{ text: "指南", link: "/guide/install", activeMatch: "/guide/" }],
        sidebar: {
            "/": [],
            "/guide/": [
                {
                    text: "指南",
                    children: [
                        { text: "介绍", link: "/guide/introduction/" },
                        { text: "安装", link: "/guide/install/" },
                        { text: "使用", link: "/guide/use/" },
                    ],
                    link: "/guide/install/",
                },
            ],
        },
        // 仓库名称和链接
        repoLabel: "GitHub",
        repo: "https://github.com/swordsmanSun/vuepress-plugin-demo-block",
    }),
});
