<script lang="ts">
  import BlogPost from "$lib/blog/BlogPost.svelte";
</script>

<BlogPost id="open-source-punish">
  <p>
    The intro to this article probably seems like a non-sequitur.
    What does being open-source have to do with punishment?
    Why would you want to punish us?
    Why would we encourage that?
  </p>

  <p>
    In essence, being open-source means that our customers always have another option.
    It's permanent, and irrevocable.
    The license could change, but you still have the right to download the code as it is today, and run it yourself without paying us anything.
  </p>

  <p>
    Making Lexoral open-source gives all of our users that option of last restort - It's the equivalent of Disney coming out and saying:
  </p>

  <blockquote>
    We promise to make sure that all our movies are accessible to everyone:

    <ul>
      <li>If there is no legal way to buy one of our movies, please pirate it.</li>
      <li>If you can't afford one of our movies, please pirate it.</li>
      <li>If one of our movies isn't in your language, then pirate it, dub it, and sell it yourself.</li>
    </ul>
  </blockquote>

  <p>
    That's unimaginable, but if it did happen, I'd certainly trust them more, and I'd trust that our incentives were aligned.
    I'd trust that their movies would be more accessible, available in all languages, and priced affordably worldwide.
    Put simply, I'd trust that they cared about their customers over their profit.
  </p>

  <p>
    That fake quote is very similar to what we promise you.
    Lexoral is an ethical company, and will earn your trust:
  </p>

  <ul>
    <li>If we betray your trust, please steal our software.</li>
    <li>If we don't provide value for money, please steal our software.</li>
    <li>If we ignore your feature requests, <strong>please steal our software, add them yourself, and start selling it to others.</strong></li>
  </ul>

  <p>
    It's not really stealing, because it's your legal right to do so under our <a rel="external" href="https://github.com/stevenwaterman/Lexoral/blob/stage/LICENSE">license</a>.
    Here's how you can use our open-source nature to punish us:
  </p>


  <h2>Reading the Code</h2>

  <p>
    Our code is hosted on GitHub, and is publicly available <a rel="external" href="https://github.com/stevenwaterman/Lexoral/">here</a>.
    All our code is on there, updated multiple times a day, even the things we haven't released yet.
    Even this blog post is open-source: you can see its code and make suggestions <a rel="external" href="https://github.com/stevenwaterman/Lexoral/blob/stage/frontend/landing/src/routes/blog/open-source-punish/index.svelte">here</a>.
    I try to keep the documentation up-to-date, but if you're confused, feel free to <a rel="external" href="https://github.com/stevenwaterman/Lexoral/issues/new">open an issue</a> and ask for help.
  </p>
  
  <p>
    Not only can you look through the current state of the code, you can also look at every previous version, or the history for any file.
    You can see the full list of changes, known as commits, <a rel="external" href="https://github.com/stevenwaterman/Lexoral/commits/stage">on GitHub</a>.
    Each one has a timestamp and a description, so you can get a rough idea of what was changed.
  </p>

  <p>
    I'm not going to try and give a full description of how to use GitHub here, but you get the idea.
    Everything we do is published for you to explore.
    Don't trust us?
    Keep an eye on the commit history, and you'll know exactly what we're up to.
    Want more information about something?
    Just get in touch, I'm happy to chat about the reason behind any changes!
  </p>


  <h2>Taking the Code</h2>

  <p>
    In this section, assume that I have died and been replaced by someone evil.
    They broke your trust, broke my promises, and it's time for that option of last resort.
    You want to take our code, and run it yourself.
    To make punishing us as easy as possible, here's some instructions:
  </p>

  <p>
    First of all, you'll want to <a rel="external" href="https://docs.github.com/en/get-started/quickstart/fork-a-repo">fork Lexoral on GitHub</a>.
    This gives you a copy of our code that you can edit on your own, independent of our version.
    The Lexoral repository is set up to auto-deploy to <a rel="exteranl" href="https://cloud.google.com/">Google Cloud</a> using <a rel="external" href="https://github.com/stevenwaterman/Lexoral/tree/stage/.github/workflows">GitHub Actions</a> and <a rel="external" href="https://github.com/stevenwaterman/Lexoral/tree/stage/terraform">Terraform</a>.
  </p>

  <p>
    You'll need to set up a Google Cloud Platform account, and create a project on there.
    Then, replace any mentions of <code>lexoral-prod</code> with the name of your new project.
    There may be a few other things to change over, but you should be able to get it working with a little bit of effort.
    Make sure you work through the list of <a rel="external" href="https://github.com/stevenwaterman/Lexoral/blob/stage/terraform/manual_setup_required.md">manual setup steps</a>, because there's some things that we haven't managed to automate yet.
  </p>

  <p>
    If you get stuck, you can contact me and ask for help.
    Assuming that I've become evil, find a friend who works in <emph>DevOps</emph>, <emph>Cloud</emph>, <emph>Full-Stack Web</emph>, or something like that.
    It should be pretty easy for anyone experienced to get Lexoral set up and running.
  </p>


  <h2>Why would I do this?</h2>

  <p>
    Companies make promises all the time, and then they break them with no consequences.
    For really important things, they'll sign contracts, but that's not much use if the company goes bankrupt or the owner dies.
    Sometimes companies will provide a money-back guarantee, but that guarantee's not worth much if the company is lying anyway.
  </p>

  <p>
    Being open-source lets you verify our promises.
    It lets you see what we're doing behind the scenes.
    It lets you punish us when we don't stick to our promises.
    It means that, no matter how badly we treat you, or how evil I become, you don't have to deal with it.
    You can leave, and still get value from Lexoral.
    It might not be as convenient, but the main person to suffer is me.
    Our incentives are properly aligned.
  </p>

  <p>
    I've just written some really detailed instruction about how you can, if we are unethical, bankrupt Lexoral.
    It doesn't concern me though.
    When I said at the start that we're an ethical company, I meant it.
    I don't see a future where you'll need to steal Lexoral, so I'm happy to give you the instructions.
    There's no better way to show that you can trust us.
  </p>
</BlogPost>