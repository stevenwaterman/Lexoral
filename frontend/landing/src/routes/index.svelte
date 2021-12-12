<script lang="ts">
  import AnimatedGradient from "$lib/landing/AnimatedGradient.svelte";
  import Hero from "$lib/landing/sections/Title.svelte";
  import Demo from "$lib/landing/sections/Demo.svelte";
  import Pricing from "$lib/landing/sections/Pricing.svelte";
  import Nav from "$lib/landing/Nav.svelte";
import HowItWorks from "$lib/landing/sections/HowItWorks.svelte";
</script>

<style>
  :global(body) {
    overflow-x: hidden;
  }

  .column {
    margin: auto;
    --col-width: min(1200pt, calc(100vw - 4em));
    --col-margin: calc(50vw - var(--col-width) / 2);
    width: var(--col-width);
  }
  
  .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: max(5em, calc(8vh)) auto;
    
    margin: auto;
    margin-bottom: 2em;
  }
  
  .grid :global(nav) {
    grid-column: span 2;
  }
</style>

<svelte:head>
	<title>Lexoral</title>
</svelte:head>

<AnimatedGradient/>

<div class="column">
  <div class="grid">
    <Nav/>
    <Hero/>
    <Demo/>
  </div>
  
  <Pricing/>
  <HowItWorks/>
  
   
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
