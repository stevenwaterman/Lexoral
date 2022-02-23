<script lang="ts">
  let introduceMe: boolean = true;
  let length: 1 | 2 | 3 = 2;
  let targetMarket: boolean = true;
  let techy: boolean = false;
  let durham: boolean = true;
  let businessModel: boolean = false;
  let emotional: boolean = true;
  let futureFeatures: boolean = true;
  let funny: boolean = true;
</script>

<style>
  label {
    display: flex;
    align-items: center;
  }

  input {
    margin: 0;
    margin-left: 1em;
  }
</style>

<label>Introduce me <input type="checkbox" bind:checked={introduceMe}/></label>
<label>Length <input type="range" min="1" max="3" step="1" bind:value={length}/></label>
<label>Target Market <input type="checkbox" bind:checked={targetMarket}/></label>
<label>Durham <input type="checkbox" bind:checked={durham}/></label>
<label>Business Model <input type="checkbox" bind:checked={businessModel}/></label>
<label>Funny <input type="checkbox" bind:checked={funny}/></label>

<hr/>

<!-- Introduction -->
{#if introduceMe}
  <p>
    Hello! I'm Steven, the founder of Lexoral.
    {#if length > 1}
      {#if durham}
        After studying Computer Science at Durham,
      {/if}
      I spent a couple of years working with various banks as a software consultant - but it just didn't sit right with me.
      {#if length === 3}
        Their problems weren't meaningful, and it didn't feel like I was really helping anyone.
      {/if}
      I needed to make a difference - to work on something I truly believed in.
    {/if}
  </p>
{/if}

<!-- Todo add paragraph about purpose of pitch -->

<!-- Why interviews are important -->
<p>
  I believe in the power of interviews.
  {#if targetMarket}
    When developing your theories, nothing beats listening to your participants and seeing the world through their eyes.
  {:else}
    As a researcher, there's really no good alternative.
    You lose so much information if you can't sit down with your participants and watch them speak, hear their tone of voice and the emotion in their words.
  {/if}
  {#if businessModel}
    I'm not alone in thinking that.
    Over 80% of Social Science research projects include some form of interviewing.
  {/if}
  {#if targetMarket}
    {#if length === 1}
      But we're all frustrated by the tedious admin.
    {:else}
      I haven't said anything novel there.
      I know you agree with me.
      So if we all believe in interviews, why do we secretly dread running them?
      The admin.
    {/if}
  {:else}
    {#if length > 1}
      It's an accepted fact that interviews are an integral part of Social Science.
      It's <em>also</em> accepted that interviews are dreaded.
      {#if funny}
        No, it's not because researchers are all introverts and hate talking to people.
      {/if}
    {/if}
    Sadly, running interviews means having to transcribe them - slowly and tediously working through the audio and writing down what was said.
  {/if}
</p>

<!-- Social Proof -->
{#if length > 1}
  <p>
    I've seen how frustrating it can be.
    My partner is currently {#if durham}at Durham {/if}working on their PhD thesis {#if durham}in Education{/if}, which included 20 hours of interviews.
    {#if !targetMarket && length === 3}
      That doesn't mean 20 hours of work, by the way.
      Each hour of audio can take up to 10 hours of frustration to transcribe.
      Frantically swapping back and forth between Word and Media Player, trying to find where you were in the audio, typing one or two words then forgetting what they said.
      It's not a fun time.
    {/if}
    I've got quite a lot of experience working with audio in the browser, so when I saw them struggling to transcribe by hand, I knew there must be a better way.
    {#if length === 2}
      After spending far too much time looking for a service that actually worked for researchers, I made one instead.
      I'm delighted to say that my partner's interviews are all transcribed thanks to Lexoral, and now I've set my sights on helping everyone else too.
    {/if}
  </p>
  
  {#if length === 3}
    <p>
      By all means, there are a number of transcription services available.
      None of them would work.
      Whether they were sharing your sensitive data, prohibitively expensive, or just plain bad at transcribing, we ruled out every option.
      I knew I could do better, so I did.
      My partner's interviews are all transcribed thanks to Lexoral, and now I'm giving everyone else the same opportunities.
    </p>
  {/if}
{/if}

<!-- How we're different -->
<p>
  Our AI assistant works with you, making transcription 10x faster and letting you focus on the research.
  {#if length > 1}
    {#if targetMarket}
      We never share your data with 3rd parties, and the only human involved is you.
      We keep you in the picture, letting you use your intuition while the AI does the grunt work.
      We made Lexoral for you, to help with the problems you actually face.
    {:else}
      The recordings that researchers upload to Lexoral include vulnerable people talking about incredibly sensitive topics.
      That's why data security is our top priority.
      We never share customer data with 3rd parties, and never read it ourselves.
      Our platform is fully automated, meaning the only human involved is you.
    {/if}
  {/if}
</p>

<!-- TODO how does it work -->
<!-- TODO business model -->

