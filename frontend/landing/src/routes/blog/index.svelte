<script lang="ts">
  import { BlogId, BlogPost, blogPosts } from "$lib/blog/blogData";
  import MainFeature from "$lib/blog/postLinks/MainFeature.svelte";
import PostLink from "$lib/blog/postLinks/PostLink.svelte";
  import SubFeature from "$lib/blog/postLinks/SubFeature.svelte";
import DiagonalSection from "$lib/landing/sections/DiagonalSection.svelte";
  import Template from "$lib/template/Template.svelte";

  const posts = Object.entries(blogPosts) as Array<[BlogId, BlogPost]>;
  posts.sort((a,b) => a[1].date.valueOf() - b[1].date.valueOf());

  const featured = posts.filter(post => post[1].featured);
  const mainFeature = featured[0][0] as BlogId;

  const subFeaturedPosts = featured.slice(1, 4).map(tup => tup[0]);
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4em;
    width: 100%;
    margin-bottom: 4em;
  }

  .title {
    grid-column: span 2;
  }

  .linkList {
    grid-column: span 4;
    display: grid;
    gap: 2em;
  }
</style>

<Template title="Lexoral Blog">
  <div class="grid">
    <div class="title">
      <h1>Tech Blog</h1>
      <p>Our blog is full of posts about what we get up to when building (and using) Lexoral. From technical deep-dives to casual musings, there's a wide range of things to talk about.</p>
      <p>You can also subscribe to our <a rel="external" href="/rss.xml">RSS feed</a>.</p>
    </div>

    <MainFeature id={mainFeature}/>

    {#each subFeaturedPosts as id (id)}
      <SubFeature {id}/>
    {/each}

    <div class="linkList">
      {#each posts as [id, _] (id)}
        <PostLink {id}/>
      {/each}
    </div>
  </div>

    
</Template>
