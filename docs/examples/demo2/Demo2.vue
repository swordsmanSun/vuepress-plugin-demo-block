<template>
    <div class="div">
        <dd-button animation="first" :icon="Copy">copy</dd-button>
        <dd-button animation="second" :icon="ArrowDown" @click="controClass" :class="buttonShowClass">show-code</dd-button>
    </div>
</template>

<script setup lang="ts">
import { DdButton } from "ddong-ui";
import { Copy, ArrowDown } from "@ddong/icon";
import { ref } from "vue";

const buttonShowClass = ref();
const controClass = (() => {
    let active = false;

    return function () {
        if (active) {
            buttonShowClass.value = [""];
        } else {
            buttonShowClass.value = ["myActive", "hover"];
        }
        active = !active;
    };
})();
</script>

<style lang="less">
.div {
    display: flex;
    gap: 1em;
}
.myActive {
    svg {
        transform: rotate(180deg);
    }
}
</style>
