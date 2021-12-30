<script lang="ts">
  import Template from "$lib/template/Template.svelte";
  import TextContainer from "$lib/template/TextContainer.svelte";
  import { AuthorDetails, authors, BlogPost } from "./blogData";

  export let post: BlogPost;

  let dateString: string;
  $: dateString = post.date.toLocaleDateString();

  let authorDetails: AuthorDetails;
  $: authorDetails = authors[post.author];
</script>

<Template title={post.title}>
  <TextContainer>
    <article>
      <h1>{post.title}</h1>
      <p>Published {dateString}</p>
      <p>By {authorDetails.longName}</p>
      <summary>{post.description}</summary>
      <slot></slot>
    </article>
  </TextContainer>
</Template>