<script>
  import LinkButton from "$lib/components/LinkButton.svelte";
</script>
<style>
  .stevenMessage {
    max-width: 26em;
  }

  .stevenMessage p {
    margin-top: 1em; 
  }

  .messageSubhead {
    font-weight: 700;
    color: var(--yellow-1);
  }

  .artieQuote {
    max-width: 24em;
  }

  .quoteAttribution {
    text-align: right;
    font-style: italic;
  }

  @media (max-width: 1199px) {
    .stevenMessage {
      max-width: unset;
      margin-top: -1em;
    }

    .artieQuote {
      max-width: unset;
    }
  }
</style>

<!-- <div class="stevenMessage">
  <p class="messageSubhead">Hi, I'm Steven - I like cats, robot wars, and the sound of a calm river in the depths of a forest.</p>

  <p>
    I've spent my career building software to make people's lives easier at a whole range of big companies.
    So when I saw an opportunity to use tech to help solve a problem close to me, I went for it:
  </p>

  <p class="messageSubhead">I started Lexoral to help with my partner's PhD research:</p>

  <blockquote class="artieQuote">
    <p>
      I'm doing a longitudinal qualitative study, with 20+ hours of participant interviews.
    </p>

    <p>
      Transcription was always my least favourite bit: it was slow to do manually but none of the alternatives worked for me.
      They don't understand the terminology, wouldn't pass ethics, and locked you in to long-term subscriptions.
    </p>

    <p>
      Lexoral meant transcripts took an afternoon instead of a week.
      Only having to correct little mistakes meant I was immersed with my participants' stories from the start.
    </p>
  </blockquote>

  <p class="quoteAttribution">
    Artie Waterman<br>PhD Student, Durham University
  </p>
</div> -->

<div class="stevenMessage">
  <p class="messageSubhead">Hi, I'm Steven - I like cats, robot wars, and the sound of a calm river in the depths of a forest.</p>

  <p>
    I've spent my career building software to make people's lives easier at a whole range of big companies.
    When I saw my partner struggling with transcribing their PhD research, I knew I had to build Lexoral.
  </p>

  <p>
    I try to be <strong>100% transparent</strong> with the Lexoral community.
    That's why it's open-source, and why I work live on Twitch.
  </p>
  
  <p>
    You're always allowed to get in touch, even if it's not about Lexoral.
    Use any of the links on screen!
  </p>
  
  <p>
    If you want to chat face-to-face, book a slot in my <strong>Office Hours</strong> below.
    They're open to anyone, and we'll spend half an hour on a call about Lexoral, your projects, or anything!
  </p> 
  
  <p>
    Please don't be shy, I'm excited to chat with you ♥
  </p>

  <LinkButton newTab={true} external={true} link="https://calendly.com/lexoral/30min">Book a Slot</LinkButton>
</div>
