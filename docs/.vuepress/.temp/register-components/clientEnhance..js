
        import { defineAsyncComponent } from "vue";
        export default {
            enhance({ app }) {
                app.component("demo1-demo1", defineAsyncComponent(() => import("G:/project/vue/06_ddui/docs/plugins/vuepress-plugin-demo-block/docs/examples/demo1/demo1.vue")));
app.component("demo2-demo2", defineAsyncComponent(() => import("G:/project/vue/06_ddui/docs/plugins/vuepress-plugin-demo-block/docs/examples/demo2/demo2.vue")));
app.component("demo3-demo3", defineAsyncComponent(() => import("G:/project/vue/06_ddui/docs/plugins/vuepress-plugin-demo-block/docs/examples/demo3/demo3.vue")));
app.component("demo", defineAsyncComponent(() => import("G:/project/vue/06_ddui/docs/plugins/vuepress-plugin-demo-block/lib/public/Demo.vue")))
            }
        }
        