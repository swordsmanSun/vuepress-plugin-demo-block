<template>
    <div class="demo" :class="demoClass">
        <p class="demo-info" v-html="info" v-if="info"></p>
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
const info = computed(() => decodeURIComponent(props.info));
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
@fill-header: rgb(32, 35, 42);
@fill-article: rgb(40, 44, 52);
@duration: 0.2s;

html {
    scroll-behavior: smooth;
}

.demo {
    --article-height: v-bind(height + "px");
}

.demo {
    border-radius: 1em;

    .demo-example {
        padding: 1em .2em;
    }

    .demo-code {
        header {
            display: flex;
            align-items: center;
            gap: 1em;
            padding: 0.5em;
            border-radius: 1em 1em 0 0;
            background-color: @fill-header;
            position: sticky;
            top: 57.6px;
            z-index: 2;

            .button-show {
                &.myActive {
                    .dd-icon {
                        i {
                            svg {
                                transform: rotate(180deg);
                            }
                        }
                    }
                }
            }
        }

        .demo-code-container-code {
            position: relative;

            article {
                height: var(--article-height);

                &::-webkit-scrollbar {
                    display: none;
                }

                scrollbar-width: none;
                overflow-y: hidden;
                border-radius: 0 0 1em 1em;
                background-color: @fill-article;
                transition: height @duration ease-out;

                pre {
                    outline: none;
                    overflow: unset;
                    padding: 1em;
                    margin: 0.2em 0.4em;

                    code {
                        color: rgb(218, 232, 232);

                        .token.tag {
                            color: rgb(80, 142, 193);
                        }
                    }
                }

                &::before {
                    content: attr(language);
                    position: absolute;
                    color: rgb(218, 232, 232);
                    line-height: 0;
                    top: 1em;
                    right: 1em;
                }
            }

            .demo-code-container-footer {
                float: left;
                width: 100%;
                padding: 0 1em;
                box-sizing: border-box;

                position: sticky;
                bottom: 0;
            }
        }
    }

    &.closed {
        overflow: hidden;

        .demo-code-container-code {
            overflow: hidden;
        }

        .demo-code-container-footer {
            display: none;
        }
    }
}
</style>
