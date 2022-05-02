import{S as K,i as Z,s as ee,e as i,g as a,t as x,a as r,c as t,E as n,F as w,f as o,H as q,T as g,b as X,q as C,r as $,m as M,k as T,w as I}from"../../../chunks/vendor-f4f84365.js";import{B as yo}from"../../../chunks/BlogPost-5e21279f.js";import{S as re}from"../../../chunks/Snippet-69f05e56.js";import"../../../chunks/Template-94d9f3df.js";import"../../../chunks/TextContainer-6589f45b.js";import"../../../chunks/date-75a350e3.js";import"../../../chunks/DiagonalSection-499ac599.js";function bo(c){let l,d,u,m,h,b,v,f,p,y,_,te,S,j,W,H;return{c(){l=i("div"),d=i("h3"),d.textContent="FAQ",u=a(),m=i("details"),m.innerHTML=`<summary class="svelte-51qud7">Why is it called an accordion menu?</summary> 
    <hr/> 
    <p>Because each part of it can expand and contract, like in an accordion.
      If you don&#39;t know what an accordion is, just imagine a cute fluffy cat.
      You still won&#39;t know what it is, but at least you&#39;ll feel better about not knowing.</p>`,h=a(),b=i("details"),b.innerHTML=`<summary class="svelte-51qud7">Huh?</summary> 
    <hr/> 
    <p>Huh.</p>`,v=a(),f=i("details"),p=i("summary"),p.textContent="If I use an accordion menu will it make me cool?",y=a(),_=i("hr"),te=a(),S=i("p"),j=x(`No, not unless you're designing a MySpace profile.
      The `),W=i("code"),W.textContent="<details>",H=x(` element is cool though, and you can use that for a lot of things.
      I'm using it on this page right below here, to show the code for each example!`),r(m,"class","svelte-51qud7"),r(b,"class","svelte-51qud7"),r(p,"class","svelte-51qud7"),r(f,"class","svelte-51qud7"),r(l,"class","container svelte-51qud7")},m(A,ue){t(A,l,ue),n(l,d),n(l,u),n(l,m),n(l,h),n(l,b),n(l,v),n(l,f),n(f,p),n(f,y),n(f,_),n(f,te),n(f,S),n(S,j),n(S,W),n(S,H)},p:w,i:w,o:w,d(A){A&&o(l)}}}class vo extends K{constructor(l){super();Z(this,l,null,bo,ee,{})}}function wo(c){let l,d,u,m,h,b,v,f;return{c(){l=q("svg"),d=q("path"),u=q("path"),m=q("path"),h=q("path"),b=q("path"),v=q("path"),f=q("circle"),r(d,"class","flight svelte-qssmf5"),r(d,"d","M 0 100 C 35 92 49 76 50 50"),g(d,"forceAnimation",c[0]),r(u,"class","trail svelte-qssmf5"),r(u,"d","M 50 50 C 41 23 26 23 1 41"),X(u,"stroke","yellowgreen"),g(u,"forceAnimation",c[0]),r(m,"class","trail svelte-qssmf5"),r(m,"d","M 50 50 C 30 43 14 51 0 100"),X(m,"stroke","turquoise"),g(m,"forceAnimation",c[0]),r(h,"class","trail svelte-qssmf5"),r(h,"d","M 50 50 C 84 46 96 63 100 85"),X(h,"stroke","goldenrod"),g(h,"forceAnimation",c[0]),r(b,"class","trail svelte-qssmf5"),r(b,"d","M 50 50 C 71 31 95 43 100 63"),X(b,"stroke","mediumorchid"),g(b,"forceAnimation",c[0]),r(v,"class","trail svelte-qssmf5"),r(v,"d","M 50 50 C 61 -6 76 3 73 100"),X(v,"stroke","firebrick"),g(v,"forceAnimation",c[0]),r(f,"class","explosion svelte-qssmf5"),r(f,"cx","50"),r(f,"cy","50"),r(f,"r","20"),g(f,"forceAnimation",c[0]),r(l,"viewBox","0 0 100 100"),r(l,"class","svelte-qssmf5")},m(p,y){t(p,l,y),n(l,d),n(l,u),n(l,m),n(l,h),n(l,b),n(l,v),n(l,f)},p(p,[y]){y&1&&g(d,"forceAnimation",p[0]),y&1&&g(u,"forceAnimation",p[0]),y&1&&g(m,"forceAnimation",p[0]),y&1&&g(h,"forceAnimation",p[0]),y&1&&g(b,"forceAnimation",p[0]),y&1&&g(v,"forceAnimation",p[0]),y&1&&g(f,"forceAnimation",p[0])},i:w,o:w,d(p){p&&o(l)}}}function ko(c,l,d){let{forceAnimation:u=!1}=l;return c.$$set=m=>{"forceAnimation"in m&&d(0,u=m.forceAnimation)},[u]}class ho extends K{constructor(l){super();Z(this,l,ko,wo,ee,{forceAnimation:0})}}function go(c){let l;return{c(){l=i("div"),l.innerHTML=`<input class="lightOverride svelte-1nf9t5b" id="lightModeCheckbox" type="checkbox"/> 
  <label class="lightOverride svelte-1nf9t5b" for="lightModeCheckbox">Light Mode</label> 

  <input class="darkOverride svelte-1nf9t5b" id="darkModeCheckbox" type="checkbox"/> 
  <label class="darkOverride svelte-1nf9t5b" for="darkModeCheckbox">Dark Mode</label> 

  <div class="body svelte-1nf9t5b"><h3 class="title svelte-1nf9t5b">My Website</h3> 
  
    <p>This is some text</p> 
    <p>This is my website where I put my text.
      I hope you like it.
      I have now used up my entire text budget and I have none left, goodbye.</p></div>`,r(l,"class","container svelte-1nf9t5b")},m(d,u){t(d,l,u)},p:w,i:w,o:w,d(d){d&&o(l)}}}class xo extends K{constructor(l){super();Z(this,l,null,go,ee,{})}}function So(c){let l;return{c(){l=i("div"),l.innerHTML=`<nav class="svelte-10kanva"><a href="." class="svelte-10kanva">Option 1</a> 
    <a href="." class="svelte-10kanva">Option 2</a> 
    <a href="." class="svelte-10kanva">Option 3</a> 
    <a href="." class="svelte-10kanva">Option 4</a></nav> 

  <p class="svelte-10kanva">\u2190 Hover</p> 
  <p class="svelte-10kanva">(or use tab)</p>`,r(l,"class","container svelte-10kanva")},m(d,u){t(d,l,u)},p:w,i:w,o:w,d(d){d&&o(l)}}}class Co extends K{constructor(l){super();Z(this,l,null,So,ee,{})}}function $o(c){let l;return{c(){l=i("div"),l.innerHTML=`<p class="svelte-1k98kr7">Scroll down the page</p> 
  <p class="svelte-1k98kr7">And watch the blue square \u{1F856}</p> 
  <div class="square svelte-1k98kr7"></div> 
  <p class="svelte-1k98kr7">The blue square follows you</p> 
  <p class="svelte-1k98kr7">As you scroll past it</p> 
  <p class="svelte-1k98kr7">And if you scroll back up</p> 
  <p class="svelte-1k98kr7">It goes back where it was</p>`,r(l,"class","scroller svelte-1k98kr7")},m(d,u){t(d,l,u)},p:w,i:w,o:w,d(d){d&&o(l)}}}class Mo extends K{constructor(l){super();Z(this,l,null,$o,ee,{})}}const To={name:"Animation.svelte",language:"svelte",snippet:`<style>
  svg {
    height: 20em;
    width: 100%;
    background-color: darkslategrey;
    border-radius: 2em;
  }

  svg :global(*) {
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 10s;
    fill: transparent;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .flight {
    stroke: gold;
    stroke-width: 2;
    stroke-dasharray: 10 100;
    stroke-dashoffset: 10;
    animation-name: flight;
    animation-timing-function: ease-in;
  }

  @keyframes flight {
    from { stroke-dashoffset: 10; }
    21%, to { stroke-dashoffset: -80; }
  }

  .explosion {
    fill: orangered;
    opacity: 0.8;
    filter: blur(1px);
    transform-origin: center;
    animation-name: explosion;
  }

  @keyframes explosion {
    from, 19% { transform: scale(0); }
    20% { transform: scale(1.5); }
    22% { transform: scale(0.5); }
    23% { transform: scale(0.8); }
    25% { transform: scale(0.2); }
    26% { transform: scale(0.4); }
    35%, to { transform: scale(0); }
  }

  .trail {
    stroke-width: 2;
    stroke-dasharray: 1 10 5 10 10 5 30 150;
    animation-name: trail;
    animation-timing-function: ease-out;
  }

  @keyframes trail {
    from, 20% { 
      stroke-width: 3;
      stroke-dashoffset: 80;
    }
    100%, to {
      stroke-width: 0.5;
      stroke-dashoffset: -150;
    }
  }
</style>

<svg viewBox="0 0 100 100">
  <path class="flight" d="M 0 100 C 35 92 49 76 50 50"/>
  <path class="trail" d="M 50 50 C 41 23 26 23 1 41" style="stroke: yellowgreen"/>
  <path class="trail" d="M 50 50 C 30 43 14 51 0 100" style="stroke: turquoise"/>
  <path class="trail" d="M 50 50 C 84 46 96 63 100 85" style="stroke: goldenrod"/>
  <path class="trail" d="M 50 50 C 71 31 95 43 100 63" style="stroke: mediumorchid"/>
  <path class="trail" d="M 50 50 C 61 -6 76 3 73 100" style="stroke: firebrick"/>
  <circle class="explosion" cx="50" cy="50" r="20"/>
</svg>
`},Io={name:"Sidebar.svelte",language:"svelte",snippet:`<style>
  .container {
    overflow: hidden;
    position: relative;
    height: 15em;
    max-width: 25em;
    margin: auto;
    border: 0.2em solid black;
  }

  nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 100%;
    padding: 1em;
    background-color: skyblue;

    transform: translateX(1em);
    transition: 0.2s transform;
  }

  nav:hover,
  nav:focus-within {
    transform: translateX(100%);
  }

  a {
    white-space: pre;
    color: black;
  }

  p {
    font-size: 2em;
    text-align: center;
  }
</style>

<div class="container">
  <nav>
    <a href=".">Option 1</a>
    <a href=".">Option 2</a>
    <a href=".">Option 3</a>
    <a href=".">Option 4</a>
  </nav>

  <p>\u2190 Hover</p>
  <p>(or use tab)</p>
</div>
`},_o={name:"StickyPositioning.svelte",language:"svelte",snippet:`<style>
  .scroller {
    max-width: 25em;
    height: 10em;
    margin: auto;
    padding: 1em;
    border: 0.2em solid black;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  p {
    height: 5em;
  }

  .square {
    height: 5em;
    width: 5em;
    background-color: lightskyblue;
    margin-left: auto;

    position: sticky;
    top: 2em;
  }
</style>

<div class="scroller">
  <p>Scroll down the page</p>
  <p>And watch the blue square \u{1F856}</p>
  <div class="square"/>
  <p>The blue square follows you</p>
  <p>As you scroll past it</p>
  <p>And if you scroll back up</p>
  <p>It goes back where it was</p>
</div>
`},Ho={name:"Accordion.svelte",language:"svelte",snippet:`
  <style>
  .container {
    padding: 1em 2em;
    border: 0.2em solid black;
    border-radius: 2em;
  }

  details {
    border: 0.1em solid black;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 1em;
  }

  summary {
    font-size: 1.2em;
    cursor: pointer;
  }
</style>

<div class="container">
  <h3>FAQ</h3>

  <details>
    <summary>Why is it called an accordion menu?</summary>
    <hr>
    <p>
      Because each part of it can expand and contract, like in an accordion.
      If you don't know what an accordion is, just imagine a cute fluffy cat.
      You still won't know what it is, but at least you'll feel better about not knowing.
    </p>
  </details>

  <details>
    <summary>Huh?</summary>
    <hr>
    <p>
      Huh.
    </p>
  </details>

  <details>
    <summary>If I use an accordion menu will it make me cool?</summary>
    <hr>
    <p>
      No, not unless you're designing a MySpace profile.
      The <code>{"<details>"}</code> element is cool though, and you can use that for a lot of things.
      I'm using it on this page right below here, to show the code for each example!
    </p>
  </details>
</div>
`},Ao={name:"DarkMode.svelte",language:"svelte",snippet:`<style>
  .container {
    position: relative;
    border: 0.2em solid black;
    max-width: 25em;
    margin: auto;
  }

  .body {
    padding: 1em;
  }

  input, label {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    height: 1.8em;
  }

  label {
    padding-right: 1.2em;
    user-select: none;
  }

  .title {
    margin: 0;
  }


  .darkOverride {
    color: black;
  }

  #darkModeCheckbox:checked {
    color: whitesmoke;
  }

  #darkModeCheckbox:checked ~ label {
    color: whitesmoke;
  }


  .lightOverride {
    color: whitesmoke;
  }

  #lightModeCheckbox:checked {
    color: black;
  }

  #lightModeCheckbox:checked ~ label {
    color: black;
  }


  @media (prefers-color-scheme: light) {
    .lightOverride {
      display: none;
    }

    .body {
      background-color: white;
      color: black;
    }
    
    #darkModeCheckbox:checked ~ .body {
      background-color: darkslategrey;
      color: whitesmoke;
    }
  }

  @media (prefers-color-scheme: dark) {
    .darkOverride {
      display: none;
    }

    .body {
      background-color: darkslategrey;
      color: whitesmoke;
    }
    
    #lightModeCheckbox:checked ~ .body {
      background-color: white;
      color: black;
    }
  }
</style>

<div class="container">
  <input class="lightOverride" id="lightModeCheckbox" type="checkbox">
  <label class="lightOverride" for="lightModeCheckbox">Light Mode</label>

  <input class="darkOverride" id="darkModeCheckbox" type="checkbox">
  <label class="darkOverride" for="darkModeCheckbox">Dark Mode</label>

  <div class="body">
    <h3 class="title">My Website</h3>
  
    <p>This is some text</p>
    <p>
      This is my website where I put my text.
      I hope you like it.
      I have now used up my entire text budget and I have none left, goodbye.
    </p>
  </div>
</div>
`};var de={animation:To,sidebar:Io,stickyPositioning:_o,accordion:Ho,darkMode:Ao};function Lo(c){let l,d,u,m,h,b,v,f,p,y,_,te,S,j,W,H,A,ue,O,Bt,oe,pe,Et,P,Ke,me,Ze,ce,et,fe,tt,he,ot,ye,st,be,it,z,U,Qt,se,ve,Rt,F,lt,we,nt,ke,at,ge,rt,ie,dt,xe,ut,Se,pt,Ce,mt,$e,ct,J,Y,Xt,le,Me,Kt,D,ft,Te,ht,Ie,yt,_e,bt,He,vt,Ae,wt,G,Zt,kt,eo,gt,N,V,to,ne,Le,oo,B,xt,L,so,qe,io,St,lo,Ct,je,$t,We,Mt,Oe,Tt,Pe,It,ze,_t,E,Q,no,ae,Ue,ao,R,Ht,Fe,At,k,ro,Lt,uo,qt,po,jt,mo,Wt,co,Ot,fo,Pt,Je,zt,Ye,Ut,De,Ft,Ge,Jt,Ne,Yt,Ve,Dt,Be,Gt,Ee,Nt,Qe,Vt,Re,Xe;return _=new ho({}),O=new ho({props:{forceAnimation:!0}}),P=new re({props:{config:de.animation}}),U=new Co({}),F=new re({props:{config:de.sidebar}}),Y=new Mo({}),D=new re({props:{config:de.stickyPositioning}}),V=new vo({}),B=new re({props:{config:de.accordion}}),Q=new xo({}),R=new re({props:{config:de.darkMode}}),{c(){l=i("p"),l.innerHTML=`Every day, I see people use Javascript to do things that are supported by default in good old HTML &amp; CSS.
    That&#39;s usually a bad idea - it&#39;s much slower, can cause content to jump around the page after loading, <a href="https://shkspr.mobi/blog/2021/01/the-unreasonable-effectiveness-of-simple-html/">and breaks your site for people with crappy browsers</a>.
    I was determined to do better, and built this landing page and blog without <em>any</em> client-side Javascript.`,d=a(),u=i("p"),u.textContent=`Along the way, I discovered just how much CSS has to offer, and I'd love to share some of that with you today.
    I know a lot of people are a bit scared of CSS, and see it as black magic, so I won't be showing you anything too complicated.
    Instead, I'm just going to focus on simple techniques and overlooked features - things you could easily incorporate into your own sites.`,m=a(),h=i("h2"),h.textContent="1. Animating SVGs",b=a(),v=i("p"),v.innerHTML=`You probably know that you can animate HTML elements with CSS.
    However, did you know that you can <em>also</em> animate SVGs, in exactly the same way?
    One of my favourite techniques is setting the <code>stroke-dasharray</code> property to a high value, then animating <code>stroke-dashoffset</code>.
    That results in the path being &#39;drawn&#39; over time, or a line moving along a path, like in this animation of some fireworks:`,f=a(),p=i("figure"),y=i("div"),C(_.$$.fragment),te=a(),S=i("div"),j=i("p"),j.textContent="Your accessibility settings indicate you are sensitive to animations and motion on the page, so this example is hidden by default.",W=a(),H=i("details"),A=i("summary"),A.textContent="Show anyway",ue=a(),C(O.$$.fragment),Bt=a(),oe=i("details"),pe=i("summary"),pe.textContent="Show the code",Et=a(),C(P.$$.fragment),Ke=a(),me=i("p"),me.innerHTML=`For another, more advanced example of how you can create animated diagrams with CSS, check out our landing page!
    The <a href="https://lexoral.com/#how-it-works">How it Works</a> section contains a detailed animation.
    If you want to copy from it, Lexoral is <a href="https://github.com/stevenwaterman/Lexoral/tree/stage/frontend/landing/src/lib/landing/sections/how/animation">open-source on GitHub</a>.`,Ze=a(),ce=i("p"),ce.textContent=`Creating an animation like that is certainly more complicated than a simple video, and very detailed animations can cause hard-to-debug performance issues.
    However, there's plenty of reasons to prefer an animated SVG:`,et=a(),fe=i("ul"),fe.innerHTML=`<li>Negligible bandwidth use</li> 
    <li>Better device compatibility</li> 
    <li>Perfect quality at any resolution</li> 
    <li>Responsive &amp; Scalable</li> 
    <li>Can be checked in to VCS</li>`,tt=a(),he=i("p"),he.innerHTML=`If you want to learn more about CSS animations, I can recommend starting with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations">the MDN guide</a>.
    To create the SVGs, either use a visual editor like <a href="https://inkscape.org/">Inkscape</a>, or a more dev-oriented tool like <a href="https://yqnn.github.io/svg-path-editor/">this one</a>.
    Often it&#39;s easier to just write the SVG markup by hand, in which case <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element">MDN has a great reference page</a>.`,ot=a(),ye=i("h2"),ye.textContent="2. Sidebars",st=a(),be=i("p"),be.innerHTML=`You want a side navigation bar that hides when it&#39;s not in use.
    Put away that script file, we&#39;ve got CSS for this.
    We&#39;ll use <code>transform</code> to move it off-screen by default, then override that when the user hovers over the element.
    Importantly, we should also show the menu when you use the <code>Tab</code> key to select one of the links in the menu - an important step towards keeping our site accessible:`,it=a(),z=i("figure"),C(U.$$.fragment),Qt=a(),se=i("details"),ve=i("summary"),ve.textContent="Show the code",Rt=a(),C(F.$$.fragment),lt=a(),we=i("p"),we.innerHTML=`This example is just clever use of <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">pseudo-classes</a> in CSS.
    You probably skipped that link, but go back and click it.
    Even if you think you know everything about CSS, click it and read down that list pseudo-classes.
    Look how many there are.
    Think about how you could use them.`,nt=a(),ke=i("p"),ke.innerHTML=`It&#39;s too easy to see <code>:hover</code> and assume it&#39;s just for styling hyperlinks.
    We&#39;ve just seen it used to create a sidebar, but here&#39;s 9 more ways you could use it:`,at=a(),ge=i("ol"),ge.innerHTML=`<li>Dropdown menus</li> 
    <li>Tooltips</li> 
    <li>Showing Video Thumbnails</li> 
    <li>Scaling up an image preview</li> 
    <li>Showing a preview of the link destination like on Wikipedia</li> 
    <li>Highlighting the important parts of a complex interface</li> 
    <li>Styling the hovered row in a table</li> 
    <li>Previewing what will happen if you click a button</li> 
    <li>Making the &#39;Reject Cookies&#39; button move out of the way when people try to click it</li>`,rt=a(),ie=i("p"),ie.textContent=`That last one was a joke.
    Please don't do that.
    I'm serious.
    I refuse to take responsibility if you do that.
    Please.`,dt=a(),xe=i("p"),xe.innerHTML=`A few of those ideas would need a delay before the hover effect activated - it would be quite hard to use Wikipedia if a popup obscured half the screen every time you moused over a link.
    You might have to fall back to using Javascript in that case, but try the <code>transition-delay</code> property first.`,ut=a(),Se=i("h2"),Se.textContent="3. Sticky Positioning",pt=a(),Ce=i("p"),Ce.innerHTML=`PSA: <code>position: sticky;</code> exists now. Please stop reimplementing it with Javascript.
    Some of you are confused why I&#39;m mentioning such a basic feature.
    If that&#39;s you, skip to the next section.`,mt=a(),$e=i("p"),$e.textContent=`Some of you have no idea what I'm talking about, and are feeling pretty self-concious.
    When you want an HTML element to move down the page as you scroll, you can do that with plain CSS!
    Not only that, it actually works way better than a Javascript version:`,ct=a(),J=i("figure"),C(Y.$$.fragment),Xt=a(),le=i("details"),Me=i("summary"),Me.textContent="Show the code",Kt=a(),C(D.$$.fragment),ft=a(),Te=i("p"),Te.textContent=`Notice how when you scroll down, the blue square is always in exactly the same position.
    It's easy to tell when someone has tried to DIY their sticky positioning, because the element always lags one frame behind when scrolling.
    The faster you scroll down, the higher up the screen it would be.
    Then, when you stop scrolling, it jumps to the correct position.`,ht=a(),Ie=i("p"),Ie.innerHTML=`Sticky positioning is a combination of <code>relative</code> and <code>fixed</code> positioning.
    It&#39;s mostly used for navigation menus that should follow you as you scroll down the page.
    It&#39;s used on this page too, if you are viewing it on a large landscape screen.
    The panel to the right with my face on it uses <code>sticky</code> positioning, meaning I&#39;m always staring at you as you read my blogs.`,yt=a(),_e=i("p"),_e.innerHTML=`To use sticky positioning, first you need to set <code>position: sticky</code> and provide distances for some (usually only one) of <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>.
    When the element is scrolled past that position on the screen, it swaps to <code>fixed</code> positioning, and starts following you.
    If you scroll back, it returns to its original position and stays there.
    They don&#39;t follow you forever though - a sticky element will never move outside of its containing element.`,bt=a(),He=i("p"),He.innerHTML=`It&#39;s a little difficult to wrap your head around, but I&#39;d recommend reading through the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position">MDN article on the position attribute</a>.
    I use <code>position</code> all the time, so I think it&#39;s worth having a good understanding of all the possible values and what they do.`,vt=a(),Ae=i("h2"),Ae.textContent="4. Accordion Menus",wt=a(),G=i("p"),Zt=x(`Accordion Menus are commonly used for FAQs, where you have a list of headers and each one can be expanded to show the content inside.
    This is another case of me telling you about a fairly basic feature of HTML+CSS, but `),kt=i("code"),kt.textContent="<details>",eo=x(" exists:"),gt=a(),N=i("figure"),C(V.$$.fragment),to=a(),ne=i("details"),Le=i("summary"),Le.textContent="Show the code",oo=a(),C(B.$$.fragment),xt=a(),L=i("p"),so=x("It's "),qe=i("a"),qe.textContent="not always a good idea",io=x(` to use accordion menus due to them having a lot of usability issues.
    However, the `),St=i("code"),St.textContent="<details>",lo=x(` element is super useful when you want to hide some content from the user, especially if it's very long and most users won't want to read it.
    For example, I used one just above here to hide the source code for the example.`),Ct=a(),je=i("p"),je.innerHTML=`If you&#39;re not sure whether to use a details element, try reading the <a href="https://service-manual.nhs.uk/design-system/components/details">NHS service manual</a> for it.
    They&#39;ve done way more usability testing than you ever will, and have some decent guidelines for when it&#39;s appropriate to use.`,$t=a(),We=i("p"),We.innerHTML=`One downside of a pure-CSS approach here is that <code>details</code> is tricky to animate without Javascript.
    It&#39;s possible to animate the box opening using <code>transition</code>, as long as you know the height of the box when open.
    Currently, browsers don&#39;t natively support animating the element being closed, so you&#39;ll have to restort to Javascript or <a href="https://stackoverflow.com/a/38215801/6382484">a custom in/out animation</a>.`,Mt=a(),Oe=i("h2"),Oe.textContent="5. Dark Mode",Tt=a(),Pe=i("p"),Pe.innerHTML=`You can have an entirely functional dark mode on your website without any Javascript, cookies, or separate URLs - all in the browser.
    There&#39;s 2 components to this.
    First, you should be using the <code>prefers-color-scheme</code>  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme">media query</a>.
    This allows you to automatically display a light-mode or dark-mode version of the site, based on the user&#39;s preferences.`,It=a(),ze=i("p"),ze.innerHTML=`However, the best way to make your website accessible is to give the user <em>choice</em>.
    Maybe they like dark mode usually, but on your website they would prefer light mode.
    We can make use of <code>:checked</code> - a CSS selector that only matches <strong>checked</strong> checkboxes.
    You might be able to see where this is going:`,_t=a(),E=i("figure"),C(Q.$$.fragment),no=a(),ae=i("details"),Ue=i("summary"),Ue.textContent="Show the code",ao=a(),C(R.$$.fragment),Ht=a(),Fe=i("p"),Fe.innerHTML=`This is actually a more general technique, which works any time you want to let the user toggle between two different versions of an element, or two different styles.
    For example, I used it in <a href="https://lexoral.com/blog/svelte-firestore-binding/">my last blog post</a> to toggle between different versions of a code snippet.`,At=a(),k=i("p"),ro=x("The trick is to combine the "),Lt=i("code"),Lt.textContent=":checked",uo=x(" pseudo-class with the "),qt=i("code"),qt.textContent="~",po=x(` sibling combinator.
    A CSS rule like `),jt=i("code"),jt.textContent="p ~ a",mo=x(" applies to all "),Wt=i("code"),Wt.textContent="<a>",co=x(" elements that have a "),Ot=i("code"),Ot.textContent="<p>",fo=x(" element sibling before them in the HTML document."),Pt=a(),Je=i("p"),Je.innerHTML=`The actual rule used is <code>#checkboxId:checked ~ .body</code> - which applies some styles to the body class <em>only</em> when the checkbox is checked.
    Since the affected element must be a subsequent sibling, we can&#39;t put the dark mode checkbox inside the body element.
    Instead, we put it before the body element, then use <code>position: absolute</code> to position it inside.`,zt=a(),Ye=i("p"),Ye.textContent=`This isn't just a toy example either.
    Most browsers will automatically remember the checkbox state, meaning you can save the user's preference for free - try ticking the box and refreshing this page!
    It won't always work, so you should probably include a little bit of JavaScript to store the user's preference in local storage.`,Ut=a(),De=i("h2"),De.textContent="Conclusion",Ft=a(),Ge=i("p"),Ge.textContent=`It's daunting to learn the ins-and-outs of HTML/CSS.
    It can be frustrating when you know exactly what you want it to do but can't figure out how to tell the computer.
    However, it's easier now than ever before to make websites look great.
    CSS has had 20 years worth of development, and is full of new features to make life easier.
    If you want some further reading, check out:`,Jt=a(),Ne=i("ul"),Ne.innerHTML=`<li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox">Flexbox</a></li> 
    <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids">Grid</a></li> 
    <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning">Position</a></li> 
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG">SVG</a></li> 
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions">Transition</a></li> 
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">Animation</a></li> 
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">Pseudo-Classes</a></li> 
    <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators">Combinators</a></li> 
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions">CSS Functions (transform, min, max, calc, gradients)</a></li>`,Yt=a(),Ve=i("p"),Ve.innerHTML=`Some of the things I&#39;ve mentioned are <em>reasonably</em> new, meaning that if you need to support Internet Explorer, these techniques probably aren&#39;t for you.
    For example, <code>position: sticky</code> and <code>:focus-within</code> aren&#39;t supported in any version of IE.
    Hopefully you can forget that Internet Explorer ever existed, in which case everything I&#39;ve used here has close to 100% support in browsers!`,Dt=a(),Be=i("p"),Be.innerHTML=`Despite that, it&#39;s still best to embrace <a href="https://en.wikipedia.org/wiki/Progressive_enhancement">progressive enhancement</a>.
    You should assume that your users will be using the most barebones browser imaginable, and make your site work as well as possible.
    Then, assume they&#39;re using a slightly better browser, and add things that make it work even better for those people.`,Gt=a(),Ee=i("p"),Ee.innerHTML=`It&#39;s like when we were talking about dark mode.
    I recommended that you should include a small piece of JavaScript code to maintain the state of the user&#39;s override checkbox.
    If they didn&#39;t enable JavaScript, the website would still work fine, but you&#39;ve used that code to make it slightly better when JS is available.
    A purely JS solution would be completely broken for anyone without JavaScript.
    <a href="https://kryogenix.org/code/browser/everyonehasjs.html">And that&#39;s a lot of people</a>.`,Nt=a(),Qe=i("p"),Qe.textContent=`Anyway, I think I've shown how powerful of a tool CSS can be when you really stretch yourself.
    The point of this post was never for you to just copy my example code, though you should feel free to do so.
    Instead, it's to give you some pointers towards the more useful parts of the language, and encourage you to explore what the more basic parts of web dev have on offer.`,Vt=a(),Re=i("p"),Re.innerHTML='<a href="mailto:steven@lexoral.com">Send me a message</a> if you make something cool!',r(y,"class","animation svelte-pfjexc"),r(j,"class","animationWarning svelte-pfjexc"),r(A,"class","svelte-pfjexc"),r(S,"class","noAnimation svelte-pfjexc"),r(pe,"class","svelte-pfjexc"),r(ve,"class","svelte-pfjexc"),X(ie,"font-size","0.7em"),r(Me,"class","svelte-pfjexc"),r(Le,"class","svelte-pfjexc"),r(qe,"href","https://www.nngroup.com/articles/accordions-complex-content/"),r(Ue,"class","svelte-pfjexc")},m(e,s){t(e,l,s),t(e,d,s),t(e,u,s),t(e,m,s),t(e,h,s),t(e,b,s),t(e,v,s),t(e,f,s),t(e,p,s),n(p,y),$(_,y,null),n(p,te),n(p,S),n(S,j),n(S,W),n(S,H),n(H,A),n(H,ue),$(O,H,null),n(p,Bt),n(p,oe),n(oe,pe),n(oe,Et),$(P,oe,null),t(e,Ke,s),t(e,me,s),t(e,Ze,s),t(e,ce,s),t(e,et,s),t(e,fe,s),t(e,tt,s),t(e,he,s),t(e,ot,s),t(e,ye,s),t(e,st,s),t(e,be,s),t(e,it,s),t(e,z,s),$(U,z,null),n(z,Qt),n(z,se),n(se,ve),n(se,Rt),$(F,se,null),t(e,lt,s),t(e,we,s),t(e,nt,s),t(e,ke,s),t(e,at,s),t(e,ge,s),t(e,rt,s),t(e,ie,s),t(e,dt,s),t(e,xe,s),t(e,ut,s),t(e,Se,s),t(e,pt,s),t(e,Ce,s),t(e,mt,s),t(e,$e,s),t(e,ct,s),t(e,J,s),$(Y,J,null),n(J,Xt),n(J,le),n(le,Me),n(le,Kt),$(D,le,null),t(e,ft,s),t(e,Te,s),t(e,ht,s),t(e,Ie,s),t(e,yt,s),t(e,_e,s),t(e,bt,s),t(e,He,s),t(e,vt,s),t(e,Ae,s),t(e,wt,s),t(e,G,s),n(G,Zt),n(G,kt),n(G,eo),t(e,gt,s),t(e,N,s),$(V,N,null),n(N,to),n(N,ne),n(ne,Le),n(ne,oo),$(B,ne,null),t(e,xt,s),t(e,L,s),n(L,so),n(L,qe),n(L,io),n(L,St),n(L,lo),t(e,Ct,s),t(e,je,s),t(e,$t,s),t(e,We,s),t(e,Mt,s),t(e,Oe,s),t(e,Tt,s),t(e,Pe,s),t(e,It,s),t(e,ze,s),t(e,_t,s),t(e,E,s),$(Q,E,null),n(E,no),n(E,ae),n(ae,Ue),n(ae,ao),$(R,ae,null),t(e,Ht,s),t(e,Fe,s),t(e,At,s),t(e,k,s),n(k,ro),n(k,Lt),n(k,uo),n(k,qt),n(k,po),n(k,jt),n(k,mo),n(k,Wt),n(k,co),n(k,Ot),n(k,fo),t(e,Pt,s),t(e,Je,s),t(e,zt,s),t(e,Ye,s),t(e,Ut,s),t(e,De,s),t(e,Ft,s),t(e,Ge,s),t(e,Jt,s),t(e,Ne,s),t(e,Yt,s),t(e,Ve,s),t(e,Dt,s),t(e,Be,s),t(e,Gt,s),t(e,Ee,s),t(e,Nt,s),t(e,Qe,s),t(e,Vt,s),t(e,Re,s),Xe=!0},p:w,i(e){Xe||(M(_.$$.fragment,e),M(O.$$.fragment,e),M(P.$$.fragment,e),M(U.$$.fragment,e),M(F.$$.fragment,e),M(Y.$$.fragment,e),M(D.$$.fragment,e),M(V.$$.fragment,e),M(B.$$.fragment,e),M(Q.$$.fragment,e),M(R.$$.fragment,e),Xe=!0)},o(e){T(_.$$.fragment,e),T(O.$$.fragment,e),T(P.$$.fragment,e),T(U.$$.fragment,e),T(F.$$.fragment,e),T(Y.$$.fragment,e),T(D.$$.fragment,e),T(V.$$.fragment,e),T(B.$$.fragment,e),T(Q.$$.fragment,e),T(R.$$.fragment,e),Xe=!1},d(e){e&&o(l),e&&o(d),e&&o(u),e&&o(m),e&&o(h),e&&o(b),e&&o(v),e&&o(f),e&&o(p),I(_),I(O),I(P),e&&o(Ke),e&&o(me),e&&o(Ze),e&&o(ce),e&&o(et),e&&o(fe),e&&o(tt),e&&o(he),e&&o(ot),e&&o(ye),e&&o(st),e&&o(be),e&&o(it),e&&o(z),I(U),I(F),e&&o(lt),e&&o(we),e&&o(nt),e&&o(ke),e&&o(at),e&&o(ge),e&&o(rt),e&&o(ie),e&&o(dt),e&&o(xe),e&&o(ut),e&&o(Se),e&&o(pt),e&&o(Ce),e&&o(mt),e&&o($e),e&&o(ct),e&&o(J),I(Y),I(D),e&&o(ft),e&&o(Te),e&&o(ht),e&&o(Ie),e&&o(yt),e&&o(_e),e&&o(bt),e&&o(He),e&&o(vt),e&&o(Ae),e&&o(wt),e&&o(G),e&&o(gt),e&&o(N),I(V),I(B),e&&o(xt),e&&o(L),e&&o(Ct),e&&o(je),e&&o($t),e&&o(We),e&&o(Mt),e&&o(Oe),e&&o(Tt),e&&o(Pe),e&&o(It),e&&o(ze),e&&o(_t),e&&o(E),I(Q),I(R),e&&o(Ht),e&&o(Fe),e&&o(At),e&&o(k),e&&o(Pt),e&&o(Je),e&&o(zt),e&&o(Ye),e&&o(Ut),e&&o(De),e&&o(Ft),e&&o(Ge),e&&o(Jt),e&&o(Ne),e&&o(Yt),e&&o(Ve),e&&o(Dt),e&&o(Be),e&&o(Gt),e&&o(Ee),e&&o(Nt),e&&o(Qe),e&&o(Vt),e&&o(Re)}}}function qo(c){let l;return{c(){l=i("details"),l.innerHTML=`<summary class="svelte-pfjexc">This post has been updated. Expand for more details.</summary> 

    <p>This post was updated 2022-03-04 based on discussions on <a href="https://news.ycombinator.com/item?id=30512512">Hacker News</a>.</p> 

    <ul><li>Warned about potential performance issues of complicated svg-based animations</li> 
      <li>If your accessibility settings indicate you prefer less motion on the page, the first example is now hidden by default with an explanation, rather than simply not animating</li> 
      <li>Sticky positioning example fixed to work on Safari - <code>overflow</code> must be set to a value other than <code>auto</code></li> 
      <li>Indicated that checkbox-based dark mode is not a replacement for the CSS media query, and should be used in tandem</li> 
      <li>Added more discussion around progressive enhancement, and reinforced that these examples are not production-ready</li></ul> 

    <p>You can also see the full <a href="https://github.com/stevenwaterman/Lexoral/commits/stage/frontend/landing/src/routes/blog/you-dont-need-js/index.svelte">commit history</a> for this post.</p>`,r(l,"class","updates svelte-pfjexc"),r(l,"slot","updates")},m(d,u){t(d,l,u)},d(d){d&&o(l)}}}function jo(c){let l,d;return l=new yo({props:{id:"you-dont-need-js",$$slots:{updates:[qo],default:[Lo]},$$scope:{ctx:c}}}),{c(){C(l.$$.fragment)},m(u,m){$(l,u,m),d=!0},p(u,[m]){const h={};m&1&&(h.$$scope={dirty:m,ctx:u}),l.$set(h)},i(u){d||(M(l.$$.fragment,u),d=!0)},o(u){T(l.$$.fragment,u),d=!1},d(u){I(l,u)}}}class Yo extends K{constructor(l){super();Z(this,l,null,jo,ee,{})}}export{Yo as default};
