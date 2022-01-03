<script lang="ts">
  import { BlogId, BlogPost, blogPosts } from "$lib/blog/blogData";
  import PostLink from "$lib/blog/postLinks/PostLink.svelte";
  import FeaturedLink from "$lib/blog/postLinks/FeaturedLink.svelte";
  import Template from "$lib/template/Template.svelte";
import Fa from "svelte-fa/src/fa.svelte";
import { faRss } from "@fortawesome/free-solid-svg-icons";

  const posts = Object.entries(blogPosts).filter(post => post[1].published) as Array<[BlogId, BlogPost]>;
  posts.sort((a,b) => a[1].date.valueOf() - b[1].date.valueOf());

  const featured = posts.filter(post => post[1].featured);
  const featuredPosts = featured.slice(0, 3).map(tup => tup[0]);
</script>

<style>
  .title {
    align-self: flex-start;
  }

  ol {
    padding: 0;
  }

  h2 {
    margin-top: 1em;
    font-size: 2em;
  }

  .subtitle {
    font-size: 1.5em;
    font-weight: 500;
    max-width: 15em;
  }

  .featured {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4em;
    list-style: none;
    width: 100%;
    padding-left: 4em;
    padding-right: 4em;

    margin-top: 2em;
    margin-bottom: 2em;
  }

  .recent {
    display: grid;
    gap: 1em;
    list-style: none;
    width: 100%;
    margin-bottom: 4em;
  }

  li {
    display: contents;
  }

  .rss {
    margin-left: 0.25em;
    color: var(--yellow-1)
  }
</style>

<Template title="Lexoral Blog">
  <div class="title">
    <h1>Our Blog <a class="rss" href="/rss.xml" title="RSS feed"><Fa icon={faRss}/></a></h1>
    <p class="subtitle">Thoughts on technology, transcription, and the world</p>
  </div>

  <h2>Featured Posts</h2>

  <ol class="featured">
    {#each featuredPosts as id (id)}
      <li><FeaturedLink {id}/></li>
    {/each}
  </ol>

  <h2>All Posts</h2>

  <ol class="recent">
    {#each posts as [id, _] (id)}
      <li><PostLink {id}/></li>
    {/each}
  </ol>
</Template>
