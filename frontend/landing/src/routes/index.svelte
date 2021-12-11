<script lang="ts">
  import AnimatedGradient from "$lib/landing/AnimatedGradient.svelte";
  import Hero from "$lib/landing/sections/Title.svelte";
  import Demo from "$lib/landing/sections/Demo.svelte";
  import LinkButton from "$lib/LinkButton.svelte";
  import DropdownLabel from "$lib/DropdownLabel.svelte";
import Pricing from "$lib/landing/sections/Pricing.svelte";
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: max(5em, calc(8vh)) auto;
    
    width: 100em;
    max-width: calc(100vw - 4em);

    margin: auto;
  }

  nav {
    grid-column: span 2;
    width: 100%;
    height: 4em;

    padding-top: 0.5em;

    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-content: center;
    align-items: center;

    color: var(--page-background);
  }

  .logo {
    height: 100%;
    max-height: 3em;
  }
  
  .navList {
    list-style: none;

    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: center;
    align-items: center;

    margin: auto;
    gap: 3em;

    padding: 0;

    font-size: 1.2em;
    font-weight: 500;
  }
</style>

<svelte:head>
	<title>Lexoral</title>
</svelte:head>

<AnimatedGradient/>

<div class="column">
  <div class="grid">
    <nav>
      <a href="/">
        <img class="logo" src="assets/smallBrand_white.svg" alt="The Lexoral logo"/>
      </a>
      <ul class="navList">
        <li><DropdownLabel
          label="How it Works"
          topLink="#how-it-works"
        /></li>
  
        <li><DropdownLabel
          label="Use Cases"
          topLink="#use-cases"
        /></li>
  
        <li><DropdownLabel
          label="Community"
          topLink="#community"
          menuItems={{
            Slack: "https://join.slack.com/t/lexoral-users/shared_invite/zt-yk0j76n5-KcQwnmCJ7FKkLsj_ik05Pw"
          }}
        /></li>
  
        <li><DropdownLabel
          label="Pricing"
          topLink="#pricing"
        /></li>
      </ul>
      <LinkButton link="/dashboard">Sign in</LinkButton>
    </nav>
    <Hero/>
    <Demo/>
  </div>
  
  <Pricing/>
  
  <h2>How does it work?</h2>
  
  Your perfect transcript is just 3 steps away
  
  <h3>Step 1: Upload</h3>
  
  Upload your audio or video files on the Lexoral dashboard.
  We accept almost any file type you can think of.
  They'll be encrypted and stored securely in the cloud.
  
  <h3>Step 2: Process</h3>
  
  We use Google's state-of-the-art speech recognition AI to transcribe your audio automatically.
  If it's not sure about a word, we'll store all the options and let you pick.
  Our fully-automated process means your confidential data stays confidential.
  
  <h3>Step 3: Refine</h3>
  
  Open your transcript and have a click around - we'll play the audio in sync.
  See a red underline?
  Click that word and choose from the options in the dropdown, or type something else.
  Export the finished transcript for use elsewhere, or just close the window - it autosaves!
  
  <hr/>
  
  <h2>Use Cases</h2>
  
  Here's some examples of how we can help
  
  <h3>Research</h3>
  
  <ul>
    <li>Safety</li>
    <li>Immersion benefits vs outsourcing / automated</li>
    <li>Jargon</li>
    <li>Quick to learn</li>
    <li>Time saved</li>
    <li>Simple pricing</li>
  </ul>
  
  <h3>Content Creation</h3>
  
  <ul>
    <li>Works with xyz platforms</li>
    <li>Quality Improvement</li>
    <li>Easy to use</li>
    <li>Upload video</li>
    <li>Export Subtitles</li>
  </ul>
  
  <hr/>
  
  <h2>Community</h2>
  
  Made by real people you can talk to
  
  Picture of me
  
  Hi! I'm Steven, the founder of Lexoral.
  When doing research for their PhD, my partner would often get frustrated at how slow and tedious it was to transcribe their interview recordings.
  Automated transcription tools weren't accurate enough, and outsourcing wasn't an option for their confidential data.
  Manual transcription was the only option, but did it have to be so painful?
  To make their life easier, I built Lexoral - the fast way to create a high-quality transcript.
  
  I'm making Lexoral better every day, and would love to chat with you about how you think we can improve:
  
  - Contact us (email)
  - Slack
  - Twitch
  - Github (We're open source)
  
  We also have a blog where I talk about the technical challenges of building Lexoral.
  
  <hr/>
  
  Sign up for Lexoral today!
  
  You'll get 15 minutes of free credit so you can upload your own audio and try it out for free.
  No payment needed, no card details needed, just sign up and go!
</div>


<footer>
- Lexoral logo
- Privacy Policy
- Contact details
</footer>
