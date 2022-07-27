<template>
    <div class="div" ref="lorem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia amet rem, expedita provident numquam, necessitatibus consectetur velit corporis eligendi eveniet deserunt hic doloribus? Eum reiciendis deserunt ut voluptatem laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia amet rem, expedita provident numquam, necessitatibus consectetur velit corporis eligendi eveniet deserunt hic doloribus? Eum reiciendis deserunt ut voluptatem laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia amet rem, expedita provident numquam, necessitatibus consectetur velit corporis eligendi eveniet deserunt hic doloribus? Eum reiciendis deserunt ut voluptatem laudantium!
    </div>
    <dd-scrollbar :bind="lorem"></dd-scrollbar>
</template>

<script setup lang="ts">
import { DdScrollbar } from "ddong-ui";
import { ref } from "vue";

const lorem = ref<HTMLDivElement>()
</script>

<style lang="less" scoped>
.div {
    width: 40em;
    white-space: nowrap;
    overflow: hidden;

    margin-bottom: 1em;
}

</style>
