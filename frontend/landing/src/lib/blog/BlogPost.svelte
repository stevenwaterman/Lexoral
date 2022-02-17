<script lang="ts">
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

  let fit: BlogPost["header"]["fit"];
  $: fit = post.header?.fit ?? "cover"

  let position: BlogPost["header"]["position"];
  $: position = post.header?.position ?? "center";

  /*
  TODO list
  - link to the main blog
  - recommended posts
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
  }

  .padded {
    padding: 1em 2em 4em 2em;
  }

  .padded > :global(*) {
    padding-left: 30pt;
    padding-right: 30pt;
  }

  .padded :global(figure) {
    padding-left: 0;
    padding-right: 0;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  .metadata {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: stretch;
    align-items: center;
    
    margin-bottom: 1em;
    font-weight: 300;
  }

  .metadata p {
    margin-bottom: 0;
  }

  .type {
    text-transform: uppercase;
  }

  .date {
    text-align: center;
  }

  .author {
    text-align: right;
  }

  summary {
    margin-top: 1em;
    color: var(--grey-0);
  }

  hr {
    margin-bottom: 2em;
  }

  h1 {
    padding-left: 0;
    padding-right: 0;
  }

  article :global(p code) {
    background-color: var(--blue-6);
    color: var(--blue-0);
    font-size: 0.85em;
    padding: 0.1em 0.2em;
  }

  @media (max-width: 1599px) {
    .grid {
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      max-width: 40em;
    }
  }

  @media (max-width: 799px) {
    .grid {
      width: 100vw;
    }

    .padded {
      padding: 1em 0;
    }

    .padded > :global(*) {
      padding-left: 0.5em;
      padding-right: 0.5em;
    }

    h1 {
      padding-left: 0.5em;
      padding-right: 0.5em;
    }
  }
</style>

<svelte:head>
	<meta name="description" content={post.longDescription}>
  <link rel="alternate" type="application/rss+xml" href="https://lexoral.com/rss.xml" title="Lexoral Blog">
  <link rel="canonical" href={`https://lexoral.com/blog/${id}`}>
	<meta property="og:title" content={post.title}>
	<meta property="og:description" content={post.longDescription}>
	<meta property="og:image" content={`https://lexoral.com/assets/blog/${id}/header.png`}>
	<meta property="og:type" content="article">
	<meta property="og:site_name" content="Lexoral">
	<meta property="og:url" content={`https://lexoral.com/blog/${id}`}>
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@Lexoral">
	<meta name="twitter:image" content={`https://lexoral.com/assets/blog/${id}/header.png`}>
</svelte:head>

<Template title={post.title}>
  <div class="grid">
    <TextContainer>
      <article>
        <img class="headerImage" src={`/assets/blog/${id}/header.png`} style={`object-fit: ${fit}; object-position: ${position};`} alt="Header"/>
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