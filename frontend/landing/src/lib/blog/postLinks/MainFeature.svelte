<script lang="ts">
  import { AuthorDetails, authors, BlogPost, blogPosts } from "../blogData";

  export let id: keyof typeof blogPosts;

  let post: BlogPost;
  $: post = blogPosts[id];

  let authorDetails: AuthorDetails;
  $: authorDetails = authors[post.author];
</script>

<style>
  .container {
    border-radius: 2em;
    height: 20em;
    width: 100%;

    display: grid;
    grid-template-columns: 20em 1fr;

    grid-column: span 2;

    background-color: var(--grey-5);
    overflow: hidden;

    box-shadow: 0 0 1em 0 var(--blue-3);
  }
  
  .padded {
    padding: 2em;
    padding-bottom: 1em;

    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: unset;
  }

  summary {
    height: 100%;
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
  <img class="headerImage" src={`/assets/blog/${id}/header.jpg`}/>
  <div class="padded">
    <h2>{post.title}</h2>
    <summary>{post.description}</summary>
    <div class="meta">
      <p>{post.date.toLocaleDateString()}</p>
      <p>{authorDetails.longName}</p>
    </div>
  </div>
</a>
