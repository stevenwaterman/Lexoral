<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte";
  import { faEnvelope, faRssSquare } from "@fortawesome/free-solid-svg-icons";
  import { faTwitch, faTwitter, faSlack, faGithub } from "@fortawesome/free-brands-svg-icons";
</script>

<style>
  .contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
    grid-auto-flow: column;

    justify-items: center;
    gap: 3em;

    list-style: none;
    width: fit-content;
    padding: 0;
    margin: 0;
  }

  p {
    margin-bottom: 0;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--page-background);
    text-decoration: none;

    transition: color 0.1s;
  }

  a :nth-child(2) {
    font-weight: 600;
  }

  a :last-child {
    font-style: italic;
  }

  a:hover {
    color: var(--yellow-1);
  }

  a:hover :global(.svelte-fa) {
    filter: none;
  }

  .contact :global(.svelte-fa) {
    font-size: 4em;
    transition: color 0.1s, filter 0.1s;
    filter: drop-shadow(0.03em 0.05em 0 var(--blue-2))
  }

  @media (max-width: 1499px) {
    .contact {
      grid-template-columns: auto;
      grid-template-rows: repeat(6, 1fr);
      gap: 1.5em;
      font-size: 0.9em;
      margin-top: -5em;
      margin-bottom: -5em;
    }
  }

  @media (max-width: 1199px) {
    .contact {
      font-size: 1em;
      margin-top: 0em;
      margin-bottom: 0em;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr 1fr;
      grid-column: span 2;
    }
  }

  @media (max-width: 799px) {
    .contact {
      grid-column: unset;
      grid-template-columns: auto;
      gap: 4em;
    }
  }
</style>

<ul class="contact">
  <li>
    <a class="contactMethod" href="mailto:steven@lexoral.com">
      <Fa icon={faEnvelope} />
      <p>Email Me</p>
      <p>steven@lexoral.com</p>
    </a>
  </li>

  <li>
    <a class="contactMethod" href="https://www.twitch.tv/lexoral">
      <Fa icon={faTwitch} />
      <p>Watch on Twitch</p>
      <p>Live Most Days</p>
    </a>
  </li>

  <li>
    <a class="contactMethod" href="/blog">
      <Fa icon={faRssSquare} />
      <p>Read our Blog</p>
      <p>Behind the Scenes</p>
    </a>
  </li>

  <li>
    <a class="contactMethod" href="https://join.slack.com/t/lexoral-users/shared_invite/zt-yk0j76n5-KcQwnmCJ7FKkLsj_ik05Pw">
      <Fa icon={faSlack} />
      <p>Join our Slack</p>
      <p>Chat with other Users</p>
    </a>
  </li>

  <li>
    <a class="contactMethod" href="https://twitter.com/lexoral/">
      <Fa icon={faTwitter} />
      <p>Follow us on Twitter</p>
      <p>For updates</p>
    </a>
  </li>

  <li>
    <a class="contactMethod" href="https://github.com/stevenwaterman/Lexoral/">
      <Fa icon={faGithub} />
      <p>We're on GitHub</p>
      <p>Lexoral is Open-Source</p>
    </a>
  </li>
</ul>
