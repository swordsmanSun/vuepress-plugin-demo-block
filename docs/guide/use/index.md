# 使用

**配置您的 `config.ts` 文件**
```ts
import { defineUserConfig } from "vuepress";
// 导入插件
import vuepressPluginDemoCode from "@ddong/vuepress-plugin-demo-block";

export default defineUserConfig({
    // 使用插件
    plugins: [vuepressPluginDemoCode()],
})
```


**如何时使用?**

1. 在您的docs目录下创建 examples 文件夹 *(插件会扫描此文件夹进行组件注册)*
2. 在 examples 文件夹内再创建文件夹, 然后创建vue组件 *(插件会将以``文件夹名-vue文件名``作为组件名进行注册)*
3. 在您的md文件内使用
``` md
::: demo 一些info
demo1/demo1.vue
:::
```
