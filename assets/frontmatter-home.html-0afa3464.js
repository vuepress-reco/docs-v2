import{_ as t,p as o,q as i,s as n,R as e,t as l,a4 as c,$ as a,n as p}from"./framework-c873e247.js";const u={},r=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,[e("In order to meet more usage scenarios of users, the theme has modularized the home page. Users can specify the content modules to be displayed and their display order in the "),n("code",null,"frontmatter"),e(" of the md file of the home page. More modules will be developed later for everyone to use , and supports users to customize the home page module as needed.")])],-1),d=a(`<h2 id="configure" tabindex="-1"><a class="header-anchor" href="#configure" aria-hidden="true">#</a> Configure</h2><p>Currently, the built-in homepage modules include <code>Banner</code>, <code>BannerBrand</code>, <code>Blog</code>, <code>MdContent</code>, <code>Footer</code>, and their configurations are as follows:</p><h3 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> modules</h3><ul><li>description: Specify the home page module</li><li>default: <code>[&#39;Banner&#39;, &#39;Blog&#39;, &#39;Footer&#39;]</code></li><li>optional：<code>Banner</code>、<code>BannerBrand</code>、<code>Blog</code>、<code>MdContent</code>、<code>Footer</code></li><li>configuration item: <ul><li>Banner: Huge display map, can display logo, title, brief description, background image, top and bottom layout</li><li>BannerBrand: Huge display map in brand format, which can display logo, title, brief description, background image, button, left and right layout</li><li>Blog: Blog module, two-column layout, showing the list of blogs as a rule, and displaying user information and blog-related content on the right</li><li>MdContent: The markdown text display module of the home page</li><li>Footer: Home Bottom Module</li></ul></li></ul><h3 id="banner" tabindex="-1"><a class="header-anchor" href="#banner" aria-hidden="true">#</a> banner</h3><ul><li>description: Used to configure the <code>Banner</code> module</li><li>frontmatter options: <ul><li>heroText: title</li><li>tagline: Briefly</li><li>heroImage: index logo</li><li>heroImageStyle: index logo style</li><li>bgImage: Background image</li><li>bgImageStyle: Background image style</li></ul></li><li>case: <ul><li><img width="600" alt="banner" src="https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png"></li></ul></li></ul><h3 id="bannerbrand" tabindex="-1"><a class="header-anchor" href="#bannerbrand" aria-hidden="true">#</a> bannerBrand</h3><ul><li>description: Used to configure the <code>BannerBrand</code> module</li><li>frontmatter options: <ul><li>title: Title</li><li>descrition: Descrition</li><li>tagline: tagline</li><li>bgImage: Background image</li><li>bgImageStyle: Background image style</li><li>buttons: button <ul><li>text: button text</li><li>link: content link</li><li>type: content style, the default background color, if not needed, can be set to &#39;plain&#39;</li></ul></li><li>socialLinks: For social address, See <a href="/en/docs/guide/icon">here</a> for settings <ul><li>icon: icon</li><li>link: button link</li></ul></li></ul></li><li>case: <ul><li><img width="600" alt="bannerBrand" src="https://user-images.githubusercontent.com/18067907/214793265-d316133f-12c3-47a3-8f96-a34e5cca5087.png"></li></ul></li></ul><h3 id="blog" tabindex="-1"><a class="header-anchor" href="#blog" aria-hidden="true">#</a> blog</h3><ul><li>description: Used to configure the <code>Blog</code> module</li><li>frontmatter options: <ul><li>socialLinks: For social address, See <a href="/en/docs/guide/icon">here</a> for settings <ul><li>icon: icon</li><li>link: button link</li></ul></li></ul></li><li>themeConfig options: <ul><li>author: author name</li><li>authorAvatar: author avatar</li></ul></li><li>case: <ul><li><img width="600" alt="blog" src="https://user-images.githubusercontent.com/18067907/216823247-8aee08e1-2c24-45e5-8c2e-b9a919ed1c27.png"></li></ul></li></ul><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><ul><li>description: Used to configure the <code>Footer</code> module</li><li>frontmatter options: <ul><li>record: Domain name filing copy</li><li>recordLink: Domain name registration address</li><li>cyberSecurityRecord: Police record copy</li><li>cyberSecurityLink: Public security record address</li><li>startYear: Start time of this site</li></ul></li><li>case: <ul><li><img width="600" alt="footer" src="https://user-images.githubusercontent.com/18067907/152644689-f7fc1e34-6f43-44f5-86a0-fd26d4157bb1.png"></li></ul></li></ul><h3 id="mdcontent" tabindex="-1"><a class="header-anchor" href="#mdcontent" aria-hidden="true">#</a> MdContent</h3><ul><li>description: The markdown text display module of the home page</li><li>case</li></ul><h2 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> Case</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">modules</span><span class="token punctuation">:</span> <span class="token comment"># Designated homepage display module</span>
  <span class="token punctuation">-</span> Banner
  <span class="token punctuation">-</span> Blog
  <span class="token punctuation">-</span> MdContent
  <span class="token punctuation">-</span> Footer
<span class="token key atrule">banner</span><span class="token punctuation">:</span> <span class="token comment"># banner module configuration</span>
  <span class="token key atrule">heroText</span><span class="token punctuation">:</span> 午后南杂
  <span class="token key atrule">tagline</span><span class="token punctuation">:</span> Enjoy when you can<span class="token punctuation">,</span> and endure when you must.
  <span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.png
  <span class="token key atrule">heroImageStyle</span><span class="token punctuation">:</span>
    <span class="token key atrule">maxWidth</span><span class="token punctuation">:</span> 200px
    <span class="token key atrule">margin</span><span class="token punctuation">:</span> 0 auto 2rem
  <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> /banner.jpg
  <span class="token key atrule">bgImageStyle</span><span class="token punctuation">:</span>
    <span class="token key atrule">height</span><span class="token punctuation">:</span> 450px
<span class="token key atrule">bannerBrand</span><span class="token punctuation">:</span> <span class="token comment"># bannerBrand module configuration</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>reco
  <span class="token key atrule">description</span><span class="token punctuation">:</span> A simple vuepress Blog &amp; Doc theme.
  <span class="token key atrule">tagline</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>reco 2.0 continues to adhere to the concise style<span class="token punctuation">,</span> all functions are out of the box<span class="token punctuation">,</span> the home page is assembled modularly<span class="token punctuation">,</span> the style is written with tailwindcss<span class="token punctuation">,</span> and Vite is used as the default compiler. You only need to be responsible for content creation<span class="token punctuation">,</span> please leave the rest to me.
  <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> /banner.jpg
  <span class="token key atrule">bgImageStyle</span><span class="token punctuation">:</span>
    <span class="token key atrule">height</span><span class="token punctuation">:</span> 450px
  <span class="token key atrule">buttons</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Guide<span class="token punctuation">,</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&#39;/docs/guide/introduce&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Default Style<span class="token punctuation">,</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&#39;/docs/theme/introduce&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&#39;plain&#39;</span> <span class="token punctuation">}</span>
  <span class="token key atrule">socialLinks</span><span class="token punctuation">:</span> <span class="token comment"># For social address</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;BrandGithub&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&#39;https://github.com/recoluan&#39;</span> <span class="token punctuation">}</span>
<span class="token key atrule">blog</span><span class="token punctuation">:</span> <span class="token comment"># blog module configuration</span>
  <span class="token key atrule">socialLinks</span><span class="token punctuation">:</span> <span class="token comment"># For social address</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;BrandGithub&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&#39;https://github.com/recoluan&#39;</span> <span class="token punctuation">}</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token comment"># footer module configuration</span>
  <span class="token key atrule">record</span><span class="token punctuation">:</span> Domain name filing copy
  <span class="token key atrule">recordLink</span><span class="token punctuation">:</span> Domain name registration address
  <span class="token key atrule">cyberSecurityRecord</span><span class="token punctuation">:</span> Police record copy
  <span class="token key atrule">cyberSecurityLink</span><span class="token punctuation">:</span> Public security record address
  <span class="token key atrule">startYear</span><span class="token punctuation">:</span> <span class="token number">2018</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="custom-home-module" tabindex="-1"><a class="header-anchor" href="#custom-home-module" aria-hidden="true">#</a> Custom Home Module</h2>`,17),m=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"The css scheme of the reco theme is postcss + tailwindcss, which supports the latest CSS nesting proposal (class scss), you need to pay attention when writing styles for components.")],-1),k=n("p",null,"As long as the component is registered globally, it can be used by the home page as a module of the home page.",-1),h=a(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">modules</span><span class="token punctuation">:</span> <span class="token comment"># Designated homepage display module</span>
  <span class="token punctuation">-</span> CustomModule
  <span class="token punctuation">-</span> Footer
<span class="token key atrule">customModule</span><span class="token punctuation">:</span> <span class="token comment"># customModule module configuration</span>
  <span class="token key atrule">key</span><span class="token punctuation">:</span> value
<span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token comment"># footer module configuration</span>
  <span class="token key atrule">record</span><span class="token punctuation">:</span> Domain name filing copy
  <span class="token key atrule">recordLink</span><span class="token punctuation">:</span> Domain name registration address
  <span class="token key atrule">cyberSecurityRecord</span><span class="token punctuation">:</span> Police record copy
  <span class="token key atrule">cyberSecurityLink</span><span class="token punctuation">:</span> Public security record address
  <span class="token key atrule">startYear</span><span class="token punctuation">:</span> <span class="token number">2018</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When developing the front page module, you can get the <code>frontmatter</code> configuration by the following methods:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePageFrontmatter<span class="token punctuation">,</span> withBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>
<span class="token keyword">const</span> frontmatter <span class="token operator">=</span> <span class="token function">usePageFrontmatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function g(b,v){const s=p("RouterLink");return o(),i("div",null,[r,d,m,k,n("p",null,[e("First, you can refer to "),l(s,{to:"/docs/theme/register-components.html"},{default:c(()=>[e("Register Components")]),_:1}),e(" to register the homepage module component as a global component, and then configure it in the frontmatter of the homepage (if the custom module component is CustomModule):")]),h])}const f=t(u,[["render",g],["__file","frontmatter-home.html.vue"]]);export{f as default};
