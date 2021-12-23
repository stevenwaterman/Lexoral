<script lang="ts">
  import Template from "$lib/template/Template.svelte";
  import type { AuthorDetails, Authors } from "./authors";
  import authors from "./authors";

  export let title: string;
  export let description: string;
  export let date: Date;

  export let author: Authors;

  let dateString: string;
  $: dateString = date.toLocaleDateString();

  let authorDetails: AuthorDetails;
  $: authorDetails = authors[author];
</script>

<Template {title}>
  <article>
    <h1>{title}</h1>
    <p>Published {dateString}</p>
    <p>By {authorDetails.longName}</p>
    <summary>{description}</summary>
    <slot></slot>
  </article>
</Template>