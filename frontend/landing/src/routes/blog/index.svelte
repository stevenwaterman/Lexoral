<script lang="ts">
  import { BlogPost, blogPosts } from "$lib/blog/blogData";
  import Template from "$lib/template/Template.svelte";

  const posts: Array<[string, BlogPost]> = Object.entries(blogPosts);
  posts.sort((a,b) => a[1].date.valueOf() - b[1].date.valueOf());

  const featured: Array<[string, BlogPost]> = posts.filter(post => post[1].featured);

  const [mainFeaturedUrl, mainFeatured] = featured[0];
  const subFeaturedPosts = featured.slice(1, 4);
</script>

<Template title="Lexoral Blog">
  <h1>Tech Blog</h1>
  <p>Here are some of our most recent posts:</p>

  <a href={mainFeaturedUrl}>{mainFeatured.title}</a>
  
  {#each subFeaturedPosts as [subFeaturedUrl, subFeatured] (subFeaturedUrl)}
    <a href={subFeaturedUrl}>{subFeatured.title}</a>
  {/each}

  {#each posts as [postUrl, post] (postUrl)}
    <a href={postUrl}>{post.title}</a>
  {/each}
</Template>
