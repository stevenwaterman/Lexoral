<script lang="ts">
  import TextContainer from "$lib/template/TextContainer.svelte";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
  import { faTwitch, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

  import type { Author, AuthorDetails } from "./blogData";
  import { authors } from "./blogData";
  
  export let author: Author;
  
  let authorDetails: AuthorDetails;
  $: authorDetails = authors[author];
</script>

<style>
  .authorCol {
    display: grid;
    grid-template-columns: 1fr;

    justify-items: center;
    align-items: center;

    row-gap: 2em;
    column-gap: 4em;
    padding: 2em 1em;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .links {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1em;
    row-gap: 1em;
    padding: 0;
    align-items: center;
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

  @media (max-width: 1599px) {
    .authorCol {
      grid-template-columns: 20em auto;
      padding: 2em 4em;
    }
  }

  @media (max-width: 1199px) {
    .authorCol {
      grid-template-columns: 16em auto;
      padding: 2em;
      column-gap: 2em;
    }
  }

  @media (max-width: 799px) {
    .authorCol {
      grid-template-columns: 1fr;
      padding: 1em;
      max-width: 20em;
      width: 100vw;
    }
  }
</style>

<svelte:head>
	<meta name="twitter:creator" content={`@${authorDetails.links.twitter ?? "Lexoral"}`}>
</svelte:head>

<TextContainer style="position: sticky; top: 1em;">
  <div class="authorCol">
    <div class="details">
      <img src={`/assets/blog/authors/${author}.jpg`} alt={authorDetails.longName}/>
      <h2 class="name">{authorDetails.longName}</h2>
      <p class="job">{authorDetails.job}</p>
      <p class="bio">{authorDetails.bio}</p>
    </div>
    
    <ul class="links">
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
          <a rel="external" href={`https://twitch.tv/${authorDetails.links.twitch}/`}>
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
          <a rel="external" href={`https://${authorDetails.links.website}`}>
            <Fa icon={faGlobe}/> {authorDetails.links.website}
          </a>
        </li>
      {/if}
    </ul>
  </div>
</TextContainer>