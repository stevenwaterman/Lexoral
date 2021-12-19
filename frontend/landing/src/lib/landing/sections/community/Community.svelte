<script>
  import DiagonalSection from "$lib/landing/sections/DiagonalSection.svelte";

  import Contact from "$lib/landing/sections/community/Contact.svelte";
  import Pictures from "$lib/landing/sections/community/Pictures.svelte";
  import Message from "$lib/landing/sections/community/Message.svelte";
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 10em 1fr auto;
    gap: 4em;

    justify-items: center;
    align-items: center;
    margin-top: 1em;

    width: 100%;
  }

  @media (max-width: 1599px) {
    .grid {
      grid-template-columns: 10em 1fr auto;
      gap: 1em;
    }
  }
</style>

<DiagonalSection
  id="community"
  title="Community"
  subtitleTop="Made by real people"
  subtitleBottom="you can chat with"
>
  <div class="grid">
    <Pictures/>
    <Message/>
    <Contact/>
  </div>
</DiagonalSection>
