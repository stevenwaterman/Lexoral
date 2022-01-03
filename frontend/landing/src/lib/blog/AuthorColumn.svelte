<script lang="ts">
  import TextContainer from "$lib/template/TextContainer.svelte";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faEnvelope, faGlobe, faRssSquare } from "@fortawesome/free-solid-svg-icons";
  import { faTwitch, faTwitter, faSlack, faGithub, faGit, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
    font-weight: 600;
  }

  .job {
    font-weight: 300;
  }

  ul {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1em;
    row-gap: 1em;
    align-items: center;
    justify-items: flex-start;
    /* padding-left: 0; */
    align-self: flex-start;
  }

  li {
    display: contents;
    transition: color 0.1s;
  }

  li:hover {
    color: var(--yellow-1);
  }

  li a {
    display: contents;
  }

  li :global(.svelte-fa) {
    font-size: 2em;
  }
</style>

<TextContainer defaultPadding={false}>
  <div class="authorCol">
    <img src={`/assets/blog/authors/${author}.jpg`} alt={authorDetails.longName}/>
    <h2 class="name">{authorDetails.longName}</h2>
    <p class="job">{authorDetails.job}</p>
    <p class="bio">{authorDetails.bio}</p>
    <ul>
      {#if authorDetails.links.email}
        <li>
          <a rel="external" href={`mailto:${authorDetails.links.email}`}>
            <Fa icon={faEnvelope}/> {authorDetails.links.email}
          </a>
        </li>
      {/if}

      {#if authorDetails.links.github}
        <li>
          <a rel="external" href={`https://github.com/${authorDetails.links.github}/`}>
            <Fa icon={faGithub}/> @{authorDetails.links.github}
          </a>
        </li>
      {/if}

      {#if authorDetails.links.twitter}
        <li>
          <a rel="external" href={`https://twitter.com/${authorDetails.links.twitter}/`}>
            <Fa icon={faTwitter}/> @{authorDetails.links.twitter}
          </a>
        </li>
      {/if}

      {#if authorDetails.links.twitch}
        <li>
          <a rel="external" href={authorDetails.links.twitch}>
            <Fa icon={faTwitch}/> @{authorDetails.links.twitch}
          </a>
        </li>
      {/if}

      {#if authorDetails.links.linkedin}
        <li>
          <a rel="external" href={`https://www.linkedin.com/in/${authorDetails.links.linkedin}/`}>
            <Fa icon={faLinkedin}/> @{authorDetails.links.linkedin}
          </a>
        </li>
      {/if}

      {#if authorDetails.links.website}
        <li>
          <a rel="external" href={authorDetails.links.website}>
            <Fa icon={faGlobe}/> {authorDetails.links.website}
          </a>
        </li>
      {/if}
    </ul>
  </div>
</TextContainer>