<script lang="ts">
  import Template from "$lib/template/Template.svelte";
  import TextContainer from "$lib/template/TextContainer.svelte";
  import AuthorColumn from "./AuthorColumn.svelte";
  import { AuthorDetails, authors, BlogId, BlogPost, blogPosts } from "./blogData";

  export let id: BlogId;

  let post: BlogPost;
  $: post = blogPosts[id];

  let dateString: string;
  $: dateString = post.date.toLocaleDateString();

  let authorDetails: AuthorDetails;
  $: authorDetails = authors[post.author];

  /*
  TODO list

  - link to the main blog
  - recommended posts
  - Styling on the data stuff
  - Author picture + bio
  - Header image
  - Head meta stuff for twitter etc
  */
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 20em;
    gap: 2em;
    align-items: flex-start;

    margin-top: -2em;
    margin-bottom: 4em;

    width: 100%;
    max-width: 80em;
  }
  
  .headerImage {
    max-height: 20em;
    width: 100%;
    object-position: center;
    object-fit: cover;
  }

  .headerImage.contain {
    object-fit: contain;
  }

  .padded {
    padding: 2em;
    padding-top: 1em;
  }

  .metadata {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    font-style: italic;
    margin-bottom: 1em;
  }

  .metadata p {
    margin-bottom: 0;
  }

  summary {
    margin-top: 1em;
    /* margin-bottom: 2em; */
    
    /* font-style: italic; */
    font-size: 1.2em;
    font-weight: 300;

    color: var(--grey-1);
  }

  hr {
    margin-bottom: 2em;
  }

  article {
  }
</style>


<Template title={post.title}>
  <div class="grid">
    <TextContainer defaultPadding={false}>
      <article>
        <img class="headerImage" src={`/assets/blog/${id}/header.png`} class:contain={post.containHeader}/>
        <div class="padded">

          <div class="metadata">
            <p class="date">Published <time>{dateString}</time></p>
            <p class="author">By {authorDetails.longName}</p>
          </div>

          <h1>{post.title}</h1>
          <summary>{post.longDescription}</summary>

          <hr/>

          <slot></slot>
        </div>
      </article>
    </TextContainer>

    <AuthorColumn author={post.author}/>
  </div>
</Template>