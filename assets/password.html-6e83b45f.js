import{_ as e,p as t,q as c,t as i,s as n,R as s,$ as o,n as l}from"./framework-c873e247.js";const p={},d=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"如果网站整体或者某篇文档具有私密性，不希望被公开，只有填入密钥登录后（关闭浏览器标签后登录失效），才能进入内容页面。"),n("ul",null,[n("li",null,"密码位数只能是 6 个字符"),n("li",null,"密码可以通过数组设置多个")])],-1),r=n("h2",{id:"获取密文",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#获取密文","aria-hidden":"true"},"#"),s(" 获取密文")],-1),u=n("p",null,[s("如果你的密码明文是 "),n("code",null,"123456"),s("，需要将其转化为密文，也就是 "),n("code",null,"e10adc3949ba59abbe56e057f20f883e"),s("，使用密文去设置密码。")],-1),m=n("p",null,[s("网站发布后，在密码输入框输入 "),n("code",null,"123456"),s(" 即可进入网站，他人也无法通过代码中的密文知道你的密码，但是你一定要记住自己的密码明文。")],-1),k=n("p",null,"请在下面的输入框输入密码明文，以获取相应的密文：",-1),v=o(`<h2 id="设置加密" tabindex="-1"><a class="header-anchor" href="#设置加密" aria-hidden="true">#</a> 设置加密</h2><h3 id="加密整个网站" tabindex="-1"><a class="header-anchor" href="#加密整个网站" aria-hidden="true">#</a> 加密整个网站</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 设置单个密码</span>
    password<span class="token operator">:</span> <span class="token string">&#39;14e1b600b1fd579f47433b88e8d85291&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置多个密码</span>
    password<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;14e1b600b1fd579f47433b88e8d85291&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;f8de1968939dd4ac5992ce962993ac2b&#39;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加密单个页面" tabindex="-1"><a class="header-anchor" href="#加密单个页面" aria-hidden="true">#</a> 加密单个页面</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> xxx
<span class="token comment"># 设置单个密码</span>
<span class="token key atrule">password</span><span class="token punctuation">:</span> 14e1b600b1fd579f47433b88e8d85291
<span class="token comment"># 设置多个密码</span>
<span class="token key atrule">password</span><span class="token punctuation">:</span> 
 <span class="token punctuation">-</span> 14e1b600b1fd579f47433b88e8d85291
 <span class="token punctuation">-</span> f8de1968939dd4ac5992ce962993ac2b</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function b(h,f){const a=l("md5");return t(),c("div",null,[d,r,u,m,k,i(a),v])}const w=e(p,[["render",b],["__file","password.html.vue"]]);export{w as default};
