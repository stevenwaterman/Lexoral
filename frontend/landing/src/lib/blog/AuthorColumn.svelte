<script lang="ts">
  import TextContainer from "$lib/template/TextContainer.svelte";

  import type { Author, AuthorDetails } from "./blogData";
  import { authors } from "./blogData";
  
  export let author: Author;
  
  let authorDetails: AuthorDetails;
  $: authorDetails = authors[author];
</script>

<style>
  .authorCol {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2em 1em;
  }

  img {
    border-radius: 50%;
    width: 60%;
    margin: auto;
  }

  .name {
    margin-top: 0.5em;
    margin-bottom: 0;

    font-size: 1.5em;
    font-weight: 600;
  }

  .job {
    font-size: 1.3em;
    font-weight: 300;
  }

  .bio {
    font-size: 1.1em;
  }
</style>

<TextContainer defaultPadding={false}>
  <div class="authorCol">
    <img src={`/assets/blog/authors/${author}.jpg`} alt={authorDetails.longName}/>
    <p class="name">{authorDetails.longName}</p>
    <p class="job">{authorDetails.job}</p>
    <p class="bio">{authorDetails.bio}</p>
  </div>
</TextContainer>