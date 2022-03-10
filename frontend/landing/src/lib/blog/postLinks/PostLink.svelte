<script lang="ts">
import { toDateString } from "$lib/utils/date";

  import { AuthorDetails, authors, BlogId, BlogPost, blogPosts } from "../blogData";

  export let id: BlogId;

  let post: BlogPost;
  $: post = blogPosts[id];

  let authorDetails: AuthorDetails;
  $: authorDetails = authors[post.author];
</script>

<style>
  .container {
    border-radius: 0.5em;
    height: 4em;
    width: 100%;

    display: grid;
    grid-template-columns: 8em 1fr auto auto auto;
    gap: 2em;
    align-items: center;
    justify-items: flex-start;
    padding-right: 2em;

    background-color: var(--grey-5);
    overflow: hidden;

    box-shadow: 0 0 0.25em 0 var(--blue-3);
  }

  .headerImage {
    width: 100%;
    height: 4em;

    object-fit: cover;
    object-position: center;
  }

  .headerImage.contain {
    object-fit: contain
  }

  a {
    text-decoration: unset;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  p {
    margin-bottom: 0;
    font-weight: 300;
    font-size: 0.8em;
  }

  .type {
    text-transform: uppercase;
  }
</style>

<a
  href={`/blog/${id}`}
  class="container"
>
  <img class="headerImage" src={`/assets/blog/${id}/header.png`} class:contain={post.containHeader} alt="Header"/>
  <h3>{post.title}</h3>
  <p>{toDateString(post.date)}</p>
  <p class="type">{post.type}</p>
  <p>{authorDetails.longName}</p>
</a>
