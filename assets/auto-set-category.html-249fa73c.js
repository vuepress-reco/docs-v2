import{_ as a,p as t,q as o,$ as s,s as e,R as n}from"./framework-c873e247.js";const i={},c=s(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>In order to save users&#39; time cost, the theme can automatically set the classification for the blog under the <code>blogs</code> folder, that is, set the name of the folder where the file is located to the value of the <code>categories</code> of the file&#39;s <code>frontmatter</code>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/
└─ .vuepress
└─ blogs
  └─ Category 1
    └─ blog1.md
  └─ Category 2
    └─ blog2.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configure" tabindex="-1"><a class="header-anchor" href="#configure" aria-hidden="true">#</a> Configure</h2>`,4),l=e("div",{class:"custom-container warning"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8v4"}),e("path",{d:"M12 16h.01"})])]),e("p",{class:"custom-container-title"},"WARNING"),e("p",null,[n("The "),e("code",null,"autoAddCategoryToNavbar"),n(" API will be adjusted later, but will not be abandoned, please use it with caution.")])],-1),r=s(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// automatically set categories</span>
    autoSetBlogCategories<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// automatically add categories and tags to the header navigation bar</span>
    autoAddCategoryToNavbar<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[c,l,r];function p(u,v){return t(),o("div",null,d)}const h=a(i,[["render",p],["__file","auto-set-category.html.vue"]]);export{h as default};
