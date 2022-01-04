<script lang="ts">
import FinalCta from "$lib/landing/sections/finish/FinalCTA.svelte";

  import Template from "$lib/template/Template.svelte";
  import TextContainer from "$lib/template/TextContainer.svelte";
import Advert from "./Advert.svelte";
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
    justify-items: center;

    margin-bottom: -6em;

    width: 100%;
    max-width: 64em;
    z-index: 20;
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
    padding: 4em;
    padding-top: 1em;
  }

  .metadata {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 1em;
    font-weight: 300;
  }

  .metadata p {
    margin-bottom: 0;
  }

  .type {
    text-transform: uppercase;
  }

  summary {
    margin-top: 1em;
    color: var(--grey-1);
  }

  hr {
    margin-bottom: 2em;
  }

  @media (max-width: 1599px) {
    .grid {
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      max-width: unset;
    }
  }

  @media (max-width: 799px) {
    .grid {
      width: 100vw;
    }
    .padded {
      padding: 1em;
    }
  }
</style>


<Template title={post.title}>
  <div class="grid">
    <TextContainer defaultPadding={false}>
      <article>
        <img class="headerImage" src={`/assets/blog/${id}/header.png`} class:contain={post.containHeader}/>
        <div class="padded">
          <div class="metadata">
            <p class="type">{post.type}</p>
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

  <div/>
  <Advert/>
</Template>