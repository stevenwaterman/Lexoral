<script lang="ts">
  import BlogPost from "$lib/blog/BlogPost.svelte";
  import Accordion from "$lib/blog/postComponents/you-dont-need-js/Accordion.svelte";
  import Animation from "$lib/blog/postComponents/you-dont-need-js/Animation.svelte";
  import DarkMode from "$lib/blog/postComponents/you-dont-need-js/DarkMode.svelte";
  import Sidebar from "$lib/blog/postComponents/you-dont-need-js/Sidebar.svelte";
  import StickyPositioning from "$lib/blog/postComponents/you-dont-need-js/StickyPositioning.svelte";
  import Snippet from "$lib/blog/snippets/Snippet.svelte";
  import snippets from "./snippets";
</script>

<style>
  summary {
    text-align: center;
  }
</style>

<BlogPost id="you-dont-need-js">
  <p>
    Every day, I see people use Javascript to do things that are supported by default in good old HTML & CSS.
    That's usually a bad idea - it's much slower, causes content to jump around the page after loading, <a href="https://shkspr.mobi/blog/2021/01/the-unreasonable-effectiveness-of-simple-html/" rel="external">and breaks your site for people with crappy browsers</a>.
    I was determined to do better, and built this landing page and blog without <em>any</em> client-side Javascript.
  </p>

  <p>
    Along the way, I figured out a few cool techniques and wanted to share them with you!
    Hopefully, you can learn more about the features I use on a daily basis, and incorporate them into your own sites.
  </p>

  <h2>1. Animations</h2>

  <p>
    You can achieve a lot by combining SVGs with simple CSS animations.
    One of my favourite techniques is setting the <code>stroke-dasharray</code> property to a high value, then animating <code>stroke-dashoffset</code>.
    That has the effect of animating a line being drawn, or a line moving along a path, like in the fireworks animation below:
  </p>

  <figure>
    <Animation/>
    <details>
      <summary>Show the code</summary>
      <Snippet config={snippets.animation}/>
    </details>
  </figure>

  <p>
    For another, more advanced example of how you can create animated diagrams with CSS, check out our landing page!
    The <a href="https://lexoral.com/#how-it-works">How it Works</a> section contains a detailed animation.
    If you want to copy from it, Lexoral is <a rel="external" href="https://github.com/stevenwaterman/Lexoral/tree/stage/frontend/landing/src/lib/landing/sections/how/animation">open-source on GitHub</a>.
  </p>

  <p>
    Creating an animation like that is certainly more complicated than a simple video.
    If you can look past the complexity, there's plenty of reasons to prefer an animated SVG:
  </p>

  <ul>
    <li>Negligible bandwidth use</li>
    <li>Better device compatability</li>
    <li>Perfect quality at any resolution</li>
    <li>Responsive & Scalable</li>
    <li>Can be checked in to VCS</li>
  </ul>

  <p>
    If you want to learn more about CSS animations, I can recommend starting with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations" rel="external">the MDN guide</a>.
    To create the SVGs, either use a visual editor like <a href="https://inkscape.org/" rel="external">Inkscape</a>, or a more dev-oriented tool like <a href="https://yqnn.github.io/svg-path-editor/" rel="external">this one</a>.
    Often it's easier to just write the SVG markup by hand, in which case <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element" rel="external">MDN has a great reference page</a>.
  </p>

  <h2>2. Sidebars</h2>

  <p>
    You want a side navigation bar that hides when it's not in use.
    Put away that script file, we've got CSS for this.
    We'll use <code>transform</code> to move it off-screen when it's not being used, then override that when the user hovers over it.
    Importantly, we should also show the menu when you use the Tab key to select one of the links in the menu - making it much more accessible:
  </p>

  <figure>
    <Sidebar/>
    <details>
      <summary>Show the code</summary>
      <Snippet config={snippets.sidebar}/>
    </details>
  </figure>

  <p>
    This example is just clever use of <a rel="external" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">pseudo-classes</a> in CSS.
    You probably skipped that link, but go back and click it.
    Even if you think you know everything about CSS, click it and read down that list pseudo-classes.
    Look how many there are.
    Think about how you could use them.
  </p>

  <p>
    It's too easy to see <code>:hover</code> and assume it's just for styling links when you hover over them.
    We've just seen it used to create a sidebar, but here's 9 more ways you could use it:
  </p>

  <ol>
    <li>Dropdown menus</li>
    <li>Tooltips</li>
    <li>Showing Video Thumbnails</li>
    <li>Scaling up an image preview</li>
    <li>Showing a preview of the link destination like on Wikipedia</li>
    <li>Highlighting the important parts of a complex interface</li>
    <li>Styling the hovered row in a table</li>
    <li>Previewing what will happen if you click a button</li>
    <li>Making the 'Reject Cookies' button move out of the way when people try to click it</li>
  </ol>

  <p style="font-size: 0.7em;">
    That last one was a joke.
    Please don't do that.
    I'm serious.
    I refuse to take responsibility if you do that.
    Please.
  </p>

  <p>
    A few of those ideas would need a delay before the hover effect activated - it would be quite hard to use Wikipedia if a popup obscured half the screen every time you moused over a link.
    You might have to fall back to using Javascript in that case, but try and do it with the <code>transition-delay</code> property first.
  </p>

  <h2>3. Sticky Positioning</h2>

  <p>
    PSA: <code>position: sticky;</code> exists now. Please stop reimplementing it with Javascript.
    Some of you are confused why I'm mentioning such a basic feature.
    If that's you, skip to the next section.
  </p>

  <p>
    Some of you have no idea what I'm talking about, and are feeling pretty self-concious.
    When you want an HTML element to move down the page as you scroll, you can do that with plain CSS!
    Not only that, it actually works way better than trying to recreate it with Javascript:
  </p>

  <figure>
    <StickyPositioning/>
    <details>
      <summary>Show the code</summary>
      <Snippet config={snippets.stickyPositioning}/>
    </details>
  </figure>

  <p>
    It's easy to tell when someone has tried to DIY their sticky positioning, because the element always lags one frame behind when scrolling.
    Notice how when you scroll down, the blue square is always in exactly the same position.
    In a Javascript-based solution, it would always be one frame behind, meaning that the faster you scroll down, the higher up the screen it would be.
    Then, when you stop scrolling, it jumps to the correct position.
    I would have coded a JS-based example to compare, but JS is banned in my CI pipeline!
  </p>

  <p>
    Sticky positioning is a combination of <code>relative</code> (default) and <code>fixed</code> positioning.
    It's mostly used for navigation menus that should follow you as you scroll down the page.
    It's used on this page too, if you have a wide enough monitor.
    The little panel to the right with my face on it uses <code>sticky</code> positioning, meaning I'm always staring at you as you read my blogs.
  </p>

  <p>
    To use sticky positioning, first you need to set <code>position: sticky</code> and provide distances for some (usually only one) of <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>.
    When the element is scrolled past that position on the screen, it swaps to <code>fixed</code> positioning, and starts following you.
    If you scroll back, it returns to its original position and stays there.
    They don't follow you forever though - a sticky element will never move outside of its containing element.
  </p>

  <p>
    It's a little difficult to wrap your head around, but I'd recommend reading through the <a rel="external" href="https://developer.mozilla.org/en-US/docs/Web/CSS/position">MDN article on the position attribute</a>.
    I use the <code>position</code> attribute all the time, so I think it's worth having a good understanding of all the possible values and what they do.
  </p>

  <h2>4. Accordion Menus</h2>

  <p>
    Accordion Menus are commonly used for FAQs, where you have a list of headers and each one can be expanded to show the content inside.
    This is another case of me telling you about a fairly basic feature of HTML+CSS, but <code>{"<details>"}</code> exists:
  </p>

  <figure>
    <Accordion/>
    <details>
      <summary>Show the code</summary>
      <Snippet config={snippets.accordion}/>
    </details>
  </figure>

  <p>
    It's <a rel="external" href="https://www.nngroup.com/articles/accordions-complex-content/">not always a good idea</a> to use accordion menus due to them having a lot of usability issues.
    However, the <code>{"<details>"}</code> element is super useful when you want to hide some content from the user, especially if it's very long and most users won't want to read it.
    For example, I used one just above here to hide the long code snippets.
  </p>

  <p>
    If you're not sure whether to use a details element, try reading the <a rel="external" href="https://service-manual.nhs.uk/design-system/components/details">NHS service manual</a> for it.
    They've done way more usability testing than you ever will, and have some decent guidelines for when it's appropriate to use.
  </p>

  <p>
    One downside of a pure-CSS approach here is that <code>details</code> is really difficult to animate without Javascript.
    It's possible to animate the box opening using <code>transition</code>, as long as you know the height of the box when open.
    Currently, browsers don't support animating the element being closed, so you'll have to restort to Javascript or <a rel="external" href="https://stackoverflow.com/a/38215801/6382484">a custom in/out animation</a>.
  </p>

  <h2>5. Dark Mode</h2>

  <p>
    You can have an entirely functional dark mode on your website without any Javascript, cookies, or separate URLs - all in the browser.
    The secret ingredient here is <code>:checked</code> - a CSS selector that only matches <strong>checked</strong> checkboxes.
    You might be able to see where this is going:
  </p>

  <figure>
    <DarkMode/>
    <details>
      <summary>Show the code</summary>
      <Snippet config={snippets.darkMode}/>
    </details>
  </figure>

  <p>
    We've created a checkbox which toggles dark mode, without using Javascript, or anything more than CSS.
    This is a more general technique, which works any time you want to let the user toggle between two different versions of an element, or two different styles.
    For example, I used it in <a href="https://lexoral.com/blog/svelte-firestore-binding/">my last blog post</a> to toggle between different versions of a code snippet.
  </p>

  <p>
    The trick here is combining the <code>:checked</code> pseudo-class with the <code>~</code> sibling combinator.
    A CSS rule like <code>p ~ a</code> applies to all <code>{"<a>"}</code> elements that have a <code>{"<p>"}</code> element sibling before them in the HTML document.
  </p>

  <p>
    The actual rule used is <code>#exampleCheckbox:checked ~ .body</code> - which applies some styles to the body class <em>only</em> when the checkbox is checked.
    Since the affected element must be a subsequent sibling, we can't put the dark mode checkbox inside the body element.
    Instead, we put it before the body element, then use <code>position: absolute</code> to position it inside.
  </p>

  <p>
    This isn't just a toy example either.
    The browser will automatically remember the checkbox state, meaning you can save the user's preference for free - try ticking the box and refreshing this page!
    Using checkboxes for styling is incredibly useful, and is much simpler to make accessible than a custom-built Javascript solution.
  </p>

  <h2>Conclusion</h2>

  <p>
    It's daunting to learn the ins-and-outs of HTML/CSS.
    It can be frustrating when you know exactly what you want it to do but can't figure out how to tell the computer.
    However, it's easier now than ever before to make websites look great.
    CSS has had 20 years worth of development, and is full of new features to make life easier.
    If you want some further reading, check out:
  </p>

  <ul>
    <li><a rel="external" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox">Flexbox</a></li>
    <li><a rel="external" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids">Grid</a></li>
    <li><a rel="external" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning">Position</a></li>
    <li><a rel="external" href="https://developer.mozilla.org/en-US/docs/Web/SVG">SVG</a></li>
    <li><a rel="external" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions">Transition</a></li>
    <li><a rel="external" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">Animation</a></li>
    <li><a rel="external" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">Pseudo-Classes</a></li>
    <li><a rel="external" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators">Combinators</a></li>
    <li><a rel="external" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions">CSS Functions (transform, min, max, calc, gradients)</a></li>
  </ul>

  <p>
    Some of the things I've mentioned are <em>reasonably</em> new, meaning that if you need to support Internet Explorer, these techniques probably aren't for you.
    For example, <code>position: sticky</code> and <code>:focus-within</code> aren't supported in any version of IE.
    Hopefully you can forget that Internet Explorer ever existed, in which case everything I've used here has close to 100% support in browsers!
  </p>
    
  <p>
    Anyway, I think I've shown how powerful of a tool CSS can be when you really stretch yourself.
    The point of this post was never for you to just copy my example code, though you should feel free to do so.
    Instead, it's to give you some pointers towards the more useful parts of the language, and encourage you to explore what the more basic parts of web dev have on offer.
  </p>

  <p>
    Send me a message if you make something cool!
  </p>
</BlogPost>
