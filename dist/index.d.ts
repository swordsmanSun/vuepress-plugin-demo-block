import { Plugin } from '@vuepress/core';

declare function DemoBlockPlugin(option?: Option): Plugin;
declare type Option = {
    examplesPath?: string;
};

export { DemoBlockPlugin as demoBlockPlugin };
