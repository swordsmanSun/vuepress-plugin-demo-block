import { path } from "@vuepress/utils";
/**
 * 将 button/css.vue 转换成 button-css.vue
 * @param fileName
 */
export default function TransComponentName(fileName: string) {
    return path.trimExt(fileName.replace(/\//g, "-"));
}
