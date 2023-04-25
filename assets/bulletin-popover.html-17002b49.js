import{_ as a,p as t,q as e,s as n,R as s,$ as p}from"./framework-c873e247.js";const o={},i=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("公告内容展示在页面右上角，以弹窗的形式展示，该公告的显示和隐藏依赖于 "),n("code",null,"sesstionStorage"),s(" 里的变量，所以网站每次被打开，公告弹窗都会显示。")])],-1),l=p(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p><strong>width</strong></p><ul><li>描述：公告宽度，单位 <code>px</code></li><li>默认值：<code>300</code></li></ul><p><strong>title</strong></p><ul><li>描述：公告标题</li><li>默认值：<code>公告</code></li></ul><p><strong>body</strong></p><ul><li>描述：公告内容</li><li>类型: <code>{ type: &#39;text&#39; | &#39;hr&#39; | &#39;title&#39; | &#39;buttongroup&#39;, content?: string, children?: Array&lt;{ text: string, link: string }&gt; }</code></li><li>类型说明： <table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>标题，需要配置 <code>content</code> 属性</td></tr><tr><td>text</td><td>文本，需要配置 <code>content</code> 属性</td></tr><tr><td>hr</td><td>隔断线，类似 <code>hr</code> 标签，此类型不需要配置其他属性</td></tr><tr><td>buttongroup</td><td>按钮组，仅此类型需要配置 <code>children</code></td></tr></tbody></table></li><li>案例：以主题官网为例</li><li><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    bulletin<span class="token operator">:</span> <span class="token punctuation">{</span>
      body<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
          content<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">🎉🎉🎉 reco 主题 2.x 已经发布 Beta 版本，在发布 Latest 版本之前不会再有大的更新，
          大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          style<span class="token operator">:</span> <span class="token string">&#39;font-size: 12px;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;hr&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;QQ 群&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
          content<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          &lt;ul&gt;
            &lt;li&gt;QQ群1：1037296104&lt;/li&gt;
            &lt;li&gt;QQ群2：1061561395&lt;/li&gt;
            &lt;li&gt;QQ群3：962687802&lt;/li&gt;
          &lt;/ul&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          style<span class="token operator">:</span> <span class="token string">&#39;font-size: 12px;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;hr&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;GitHub&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
          content<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          &lt;ul&gt;
            &lt;li&gt;&lt;a href=&quot;https://github.com/vuepress-reco/vuepress-theme-reco/issues&quot;&gt;Issues&lt;a/&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;https://github.com/vuepress-reco/vuepress-theme-reco/discussions/1&quot;&gt;Discussions&lt;a/&gt;&lt;/li&gt;
          &lt;/ul&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          style<span class="token operator">:</span> <span class="token string">&#39;font-size: 12px;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;hr&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;buttongroup&#39;</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;打赏&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/others/donate.html&#39;</span> <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,7),c=[i,l];function r(u,d){return t(),e("div",null,c)}const v=a(o,[["render",r],["__file","bulletin-popover.html.vue"]]);export{v as default};
