import{_ as n,o as s,c as a,a as e}from"./app.94fd53be.js";const i={},t=e(`<h1 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h1><h2 id="\u914D\u7F6E\u60A8\u7684-config-ts-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u60A8\u7684-config-ts-\u6587\u4EF6" aria-hidden="true">#</a> <strong>\u914D\u7F6E\u60A8\u7684 <code>config.ts</code> \u6587\u4EF6</strong></h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5BFC\u5165\u63D2\u4EF6</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> demoBlockPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@ddongui/vuepress-plugin-demo-block&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// \u4F7F\u7528\u63D2\u4EF6</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">demoBlockPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5982\u4F55\u65F6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a> <strong>\u5982\u4F55\u65F6\u4F7F\u7528?</strong></h2><ol><li>\u5728\u60A8\u7684docs\u76EE\u5F55\u4E0B\u521B\u5EFA examples \u6587\u4EF6\u5939 <em>(\u63D2\u4EF6\u4F1A\u626B\u63CF\u6B64\u6587\u4EF6\u5939\u8FDB\u884C\u7EC4\u4EF6\u6CE8\u518C, \u82E5\u62A5\u9519\u8BF7\u81EA\u5B9A\u4E49\u914D\u7F6Eexample\u8DEF\u5F84)</em></li><li>\u5728 examples \u6587\u4EF6\u5939\u5185\u518D\u521B\u5EFA\u6587\u4EF6\u5939, \u7136\u540E\u521B\u5EFAvue\u7EC4\u4EF6 <em>(\u63D2\u4EF6\u4F1A\u5C06\u4EE5<code>\u6587\u4EF6\u5939\u540D-vue\u6587\u4EF6\u540D</code>\u4F5C\u4E3A\u7EC4\u4EF6\u540D\u8FDB\u884C\u6CE8\u518C)</em></li><li>\u5728\u60A8\u7684md\u6587\u4EF6\u5185\u4F7F\u7528</li></ol><p><strong>vue\u7EC4\u4EF6\u5B58\u653E\u4F4D\u7F6E</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">--docs</span>
  <span class="token parameter variable">--examples</span>
    <span class="token parameter variable">--demo1</span>
      <span class="token parameter variable">--Demo1.vue</span>
    <span class="token parameter variable">--demo2</span>
      <span class="token parameter variable">--demo2.vue</span>
    <span class="token parameter variable">--demo3</span>
      <span class="token parameter variable">--demo3.vue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5728markdown\u6587\u4EF6\u4E2D\u4F7F\u7528</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: demo
demo1/demo1
:::

::: demo
demo2/demo2
:::

::: demo \u4EE5\u4E0B\u662F  <span class="token code-snippet code keyword">\`\u793A\u4F8B3\`</span>
demo3/demo3
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49examples\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49examples\u8DEF\u5F84" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49examples\u8DEF\u5F84</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> demoBlockPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@ddongui/vuepress-plugin-demo-block&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">demoBlockPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// \u5FC5\u987B\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\uFF0C \u5728\u60A8\u7684 config.ts \u8D77\u59CB\u8DEF\u5F84\u5F00\u59CB</span>
        examplesPath<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;../examples/&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[t];function p(l,c){return s(),a("div",null,o)}const r=n(i,[["render",p],["__file","index.html.vue"]]);export{r as default};
