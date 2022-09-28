<template>
    <div class="demo" :class="demoClass">
        <div class="demo-info" v-html="info" v-if="info"></div>
        <div class="demo-example">
            <component :is="component"></component>
        </div>
        <div class="demo-code">
            <header>
                <dd-button class="button-copy" @click="copy" :icon="Copy" animation="first" size="small">复制</dd-button>
                <dd-button :class="buttonShowClass" class="button-show" @click="show"
                    :icon="{ value: ArrowDown, color: 'primary' }" plain animation="second" size="small">显示代码
                </dd-button>
            </header>
            <div class="demo-code-container-code" ref="demoCodeContainerCode">
                <article v-html="codeHighlight" ref="article" language="vue"></article>
                <div class="demo-code-container-footer">
                    <dd-scrollbar :bind="article"></dd-scrollbar>
                </div>
            </div>
        </div>
        <footer class="demo-footer"></footer>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { GetSingle, DebounceImmediately } from "./Demo";
import { DdButton, DdMessage, DdScrollbar } from "ddong-ui";
import { Copy, ArrowDown } from "@ddongui/icon";
import "ddong-ui/es/style.css";

const props = defineProps<{
    component: string;
    codeHighlight: string;
    code: string;
    info: string;
}>();
/* info */
const info = decodeURIComponent(props.info);
/* code */
const codeHighlight = computed(() => decodeURIComponent(props.codeHighlight));
const article = ref<HTMLElement>();

// 惰性单例查找一次
const getSinglePre = GetSingle(() => article.value?.children[0]) as () => HTMLPreElement;
const copy = DebounceImmediately(
    () => {
        // 防抖立即执行
        const textarea = document.createElement("textarea");
        // make the textarea out of viewport
        textarea.style.position = "fixed";
        textarea.style.left = "-999999px";
        textarea.style.top = "-999999px";
        document.body.append(textarea);
        // copy
        textarea.value = decodeURIComponent(props.code);
        textarea.focus()
        textarea.select()
        document.execCommand("copy");
        textarea.remove()
    },
    500,
    () => {
        DdMessage({
            text: "复制成功 !",
            type: "success",
            style: {
                container: {
                    zIndex: "22",
                },
            },
        });
    }
);
/* css */
const height = ref(0);
const buttonShowClass = ref();
const demoClass = ref(["closed"]);
const demoCodeContainerCode = ref<HTMLDivElement>();
const show = (function () {
    let open = false;
    let t: NodeJS.Timeout;

    return function () {
        if (t) clearTimeout(t);
        if (open) {
            t = setTimeout(() => {
                demoClass.value = ["closed"];
            }, 190);
            height.value = 0;
            buttonShowClass.value = [""];
        } else {
            buttonShowClass.value = ["myActive", "hover"];
            demoClass.value = [""];
            height.value = getSinglePre().clientHeight;
        }
        open = !open;
    };
})();
</script>

<style lang="less">
.demo {
    --article-height: v-bind(height + "px");
}

@import "./Demo.less";
</style>
