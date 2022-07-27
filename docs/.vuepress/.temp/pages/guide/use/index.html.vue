<template><div><h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h1>
<p><strong>配置您的 <code v-pre>config.ts</code> 文件</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress"</span><span class="token punctuation">;</span>
<span class="token comment">// 导入插件</span>
<span class="token keyword">import</span> vuepressPluginDemoCode <span class="token keyword">from</span> <span class="token string">"@ddong/vuepress-plugin-demo-block"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 使用插件</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vuepressPluginDemoCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如何时使用?</strong></p>
<ol>
<li>在您的docs目录下创建 examples 文件夹 <em>(插件会扫描此文件夹进行组件注册)</em></li>
<li>在 examples 文件夹内再创建文件夹, 然后创建vue组件 <em>(插件会将以<code v-pre>文件夹名-vue文件名</code>作为组件名进行注册)</em></li>
<li>在您的md文件内使用</li>
</ol>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: demo 一些info
demo1/demo1.vue
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
