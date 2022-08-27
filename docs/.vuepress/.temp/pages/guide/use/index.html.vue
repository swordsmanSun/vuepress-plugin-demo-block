<template><div><h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h1>
<h2 id="配置您的-config-ts-文件" tabindex="-1"><a class="header-anchor" href="#配置您的-config-ts-文件" aria-hidden="true">#</a> <strong>配置您的 <code v-pre>config.ts</code> 文件</strong></h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress"</span><span class="token punctuation">;</span>
<span class="token comment">// 导入插件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> demoBlockPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@ddongui/vuepress-plugin-demo-block"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 使用插件</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">demoBlockPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何时使用" tabindex="-1"><a class="header-anchor" href="#如何时使用" aria-hidden="true">#</a> <strong>如何时使用?</strong></h2>
<ol>
<li>在您的docs目录下创建 examples 文件夹 <em>(插件会扫描此文件夹进行组件注册, 若报错请配置example路径)</em></li>
<li>在 examples 文件夹内再创建文件夹, 然后创建vue组件 <em>(插件会将以<code v-pre>文件夹名-vue文件名</code>作为组件名进行注册)</em></li>
<li>在您的md文件内使用</li>
</ol>
<p><strong>Demo1存放位置</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token parameter variable">--docs</span>
  <span class="token parameter variable">--examples</span>
    <span class="token parameter variable">--demo1</span>
      <span class="token parameter variable">--Demo1.vue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用</strong></p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: demo [info]
demo1/demo1
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义examples路径" tabindex="-1"><a class="header-anchor" href="#自定义examples路径" aria-hidden="true">#</a> 自定义examples路径</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> demoBlockPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@ddongui/vuepress-plugin-demo-block"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">demoBlockPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 必须使用绝对路径， 在您的 config.ts 起始路径开始</span>
        examplesPath<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">"../examples/"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


