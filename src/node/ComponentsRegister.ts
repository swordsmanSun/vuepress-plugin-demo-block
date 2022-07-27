import { App } from "@vuepress/core";

export class ComponentsRegister {
    #components: ComponentInfo[] = [];
    #app: App;

    constructor(app: App) {
        this.#app = app;
    }
    /**
     *注册组件
     * @param component 组件信息
     */
    Push(component: ComponentInfo) {
        // 重复name组件不再注册
        for (let i = 0; i < this.#components.length; i++) {
            if (this.#components[i].name === component.name) {
                return;
            }
        }
        this.#components.push(component);
    }
    /**
     * 打印
     */
    Show() {
        console.log(this.#components);
    }
    /**
     * 写临时文件，关键
     */
    WriteTempFile() {
        const fileText = `
        import { defineAsyncComponent } from "vue";
        export default {
            enhance({ app }) {
                ${this.#components
                    .map((component) => {
                        return `app.component("${component.name}", defineAsyncComponent(() => import("${component.path}")))`;
                    })
                    .join(";\n")}
            }
        }
        `;
        return this.#app.writeTemp(`register-components/clientEnhance..js`, fileText);
    }
}

export type ComponentInfo = { name: string; path: string };
