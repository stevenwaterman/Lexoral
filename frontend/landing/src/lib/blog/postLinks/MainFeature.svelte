<script lang="ts">
  import { AuthorDetails, authors, BlogId, BlogPost, blogPosts } from "../blogData";

  export let id: BlogId;

  let post: BlogPost;
  $: post = blogPosts[id];

  let authorDetails: AuthorDetails;
  $: authorDetails = authors[post.author];
</script>

<style>
  .container {
    border-radius: 2em;
    width: 100%;

    display: grid;
    grid-template-rows: 20em 1fr;

    grid-column: span 2;

    background-color: var(--grey-5);
    overflow: hidden;

    box-shadow: 0 0 0.5em 0 var(--blue-3);
  }

  .headerImage {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  .headerImage.contain {
    object-fit: contain
  }
  
  .padded {
    padding: 1em;
    padding-bottom: 2em;

    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: unset;
  }

  summary {
    height: 100%;
    padding-bottom: 2em;
  }

  h2 {
    margin-top: 0;
    font-size: 2em;
  }

  .meta {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    font-style: italic;
  }

  .meta p {
    margin-bottom: 0;
  }
</style>

<a href={`/blog/${id}`} class="container">
  <img class="headerImage" src={`/assets/blog/${id}/header.png`} class:contain={post.containHeader}/>
  <div class="padded">
    <h2>{post.title}</h2>
    <summary>{post.longDescription}</summary>
    <div class="meta">
      <p>{post.date.toLocaleDateString()}</p>
      <p>{authorDetails.longName}</p>
    </div>
  </div>
</a>
