<script lang="ts">
  import { BlogPost, blogPosts } from "$lib/blog/blogData";
  import MainFeature from "$lib/blog/postLinks/MainFeature.svelte";
  import Template from "$lib/template/Template.svelte";

  const posts: Array<[string, BlogPost]> = Object.entries(blogPosts);
  posts.sort((a,b) => a[1].date.valueOf() - b[1].date.valueOf());

  const featured: Array<[string, BlogPost]> = posts.filter(post => post[1].featured);
  const mainFeature = featured[0][0] as keyof typeof blogPosts;

  const subFeaturedPosts = featured.slice(1, 4);
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    gap: 1em;
    width: 100%;
  }

  .title {
  }
</style>

<Template title="Lexoral Blog">
  <div class="grid">
    <div class="title">
      <h1>Tech Blog</h1>
      <p>Here are some of our most recent posts:</p>
    </div>

    <MainFeature id={mainFeature}/>
  </div>
  
  {#each subFeaturedPosts as [subFeaturedUrl, subFeatured] (subFeaturedUrl)}
    <a href={`/blog/${subFeaturedUrl}`}>{subFeatured.title}</a>
  {/each}

  {#each posts as [postUrl, post] (postUrl)}
    <a href={`/blog/${postUrl}`}>{post.title}</a>
  {/each}
</Template>
