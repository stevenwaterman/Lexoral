<script lang="ts">
  import BlogPost from "$lib/blog/BlogPost.svelte";
import Animation from "$lib/landing/sections/how/animation/Animation.svelte";
import UseCases from "$lib/landing/sections/uses/UseCases.svelte";
import AnimatedGradient from "$lib/template/AnimatedGradient.svelte";
</script>

<BlogPost id="why-open-source">
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
    Even this blog post is open-source: you can see its code and make suggestions <a rel="external" href="https://github.com/stevenwaterman/Lexoral/blob/stage/frontend/landing/src/routes/blog/why-open-source/index.svelte">here</a>.
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
    So if you're reading this, I'm going to assume that I have, for some reason, become evil.
    I have broken your trust, broken my promises, and it's time for that option of last resort.
    You want to take our code, and run it yourself.
    To make that as easy as possible for you to punish us, here's some instructions:
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


<!-- 
  <p>
    When a piece of software like Lexoral is "Open Source", it means that the underlying source code defining the software is available for you to read.
    Usually, the software is also "Free", meaning that you are <strong>free</strong> to do what you want with it.
  </p>

  <p>
    It's a bit like with very old books, or classical music, where they have entered the public domain.
    You are allowed to print off a copy of the Great Gatsby and sell it to someone, but you'll still have to pay for a copy at a book shop.
    (In this post, "free" is about rights, not money)
  </p>

  <p>
    Unlike the public domain, the creators of Open-Source Software still hold the copyright to the code, they have just provided a public license for anyone that wants it.
    Free licenses, like the <a rel="external" href="https://opensource.org/licenses/MIT">MIT License</a> don't restrict the users at all and are almost identical to public domain.
    However, there are also a wide-range of non-free licenses, which choose to restrict some of the rights they are giving away to users.
  </p>

  <p>
    For example, you might only be allowed to use the code in non-commercial products, or you might only be allowed to use the code if your software is also open-source (known as copy-left).
    Lexoral is published under the <a rel="external" href="https://github.com/stevenwaterman/Lexoral/blob/stage/LICENSE">GNU General Public License v3.0</a>, which is one example of a copy-left license.
    Anyone can read the code, and anyone can use it for whatever they want, as long as they also use an Open-Source license.
  </p>
  
  <h2>The Five Reasons</h2>

  <p>
    I've benefitted a lot from the open-source community in the past, and try my best to contribute back when I can.
    In the past, it has never really been much of a question that I would release a project as open-source, so that other people can enjoy it.
    It just feels like the right thing to do.
  </p>

  <p>
    Lexoral felt different, because it's not just a piece of software.
    Lexoral is a for-profit company, and my full-time job.
    It's certainly strange to think about spending your day working on something just to give it away.
    It's even stranger to think about <emph>also</emph> trying to make money from something you're giving away.
  </p>

  <p>
    Clearly, I eventually decided to make Lexoral open-source.
    Let's talk about the 5 things that convinced me.
  </p>


  <h2>It inspires trust</h2>

  <p>
    I trust open-source software a lot more than closed-source software, and so should you.
    It's like a restaurant with a big glass window into the kitchen.
    I might not want to watch my food being made, but the fact that I <emph>can</emph> makes me more confident that they're not cutting corners.
  </p>

  <p>
    You can trust what I say, because you can check.
    Everything is transparent, and any dodgy business is on display.
    Even if I suddenly turned evil, there's not much you can get away with when every change is broadcast to the world.
  </p>

  <p>
    So being open-source means you can trust us.
    You don't even need to trust us - you can just look behind the curtain and see what we're doing.
    We know that you're watching, so we can't lie.
    You know that we know, and we know that you know that we know, and you know that we know that you...
  </p>


  <h2>It generates discussion</h2>

  <p>
    On a more positive note, when thousands of people are looking at some code, a few of those people probably have some suggestions!
    We're open to feedback from anyone, and you can even submit your own changes to our codebase. 
  </p>

  <p>
    If someone does copy Lexoral and release their own version, they are forced to release it open-source too.
    That means that we can incorporate their improvements and improve Lexoral as a result.
  </p>

  <p>
    We're not perfect, so there will be mistakes in our code.
    However, that happens whether or not we're open source, so I'd rather have a thousand eyes checking the code than just my two.
    With your help, Lexoral can become even better!
  </p>


  <h2>It provides a last resort</h2>

  <p>
    We've already discussed how being Open-Source prevents us from lying to you about what Lexoral is doing behind the scenes.
    However, it also forces us to look after our customers, because they're never a captive audience.
  </p>

  <p>
    If Lexoral is too expensive, or if we're not safe enough for your data, or if we don't implement the features you need, then you can just do it yourself.
    Download the code, deploy it to your own servers, and use Lexoral while only paying for the server costs.
    It's not a simple process, but it's possible, and it's always there as a last resort for our users.
  </p>

  <p>
    Having that last-resort option there forces us to be better and look after our customers, because they're never captive.
    If you're not happy with the service we're providing, you can run your own version instead.
  </p>

  <p>
    This is probably quite a radical point for us to make.
    It's the equivalent of Disney telling you to pirate their movies if you can't afford them.
    Let us be abundantly clear:
  </p>

  <p>
    We never want you to be forced to give us money for a service that's bad value for money.
    If we don't fit your needs, don't give you value for money, or haven't looked after you as a customer, please steal our software and run it yourself.
    It's your legal right to do so, per our license.
  </p>

  <p>
    Publishing Lexoral as Open-Source software helps the customers we haven't looked after, and punishes us by making it easier for them to leave.
    It's like a money-back guarantee, but even better, because you get to keep using the software for free and you don't have to rely on us to honour it.
  </p>


  <h2>It's low(ish) risk</h2>

  <p>
    It's entirely possible that a big company could take the code for Lexoral and release it themselves under another name.
    However, I'm not too concerned about that, because Lexoral would have a number of advantages over their copy.
  </p>

  <p>
    Firstly, nobody else knows the code as well as I do, so we'll be able to improve Lexoral much faster than they could.
    Additionally, while the code itself is open-source, there are still a number of reasons to stick with the original Lexoral.
    All your data is here, for a start, as are all of the people you work with.
    As we start to roll out the upcoming collaboration features, you'll need to be using the same version as the people you are collaborating with.
  </p>

  <p>
    What's more, we have worked to build up trust with our users, and to develop our brand as an ethical company.
    While you'll be able to trust the new version initially, you have no way of knowing what they're doing with your data behind the scenes.
    You need to trust both the software and the people hosting it.
  </p>

  <p>
    In the worst-case scenario, I do still hold the copyright to the code I write.
    While I can't revoke the licenses that have already been given out, I can stop making updates to Lexoral open-source, or swap to a more restrictive license that forbids commercial use.
    I'd rather not do that, but the option is there, and it should act as a deterrent.
  </p>


  <h2>It just feels right</h2>

  <p>
    I think a lot of this post is just post-rationalisation really, because this has always been the main reason.
    I have benefitted immensely from open-source software in the past, and it would feel unjust to not give back.
    I trust that it's a viable strategy, because companies I respect like <a href="https://sourcegraph.com/search">SourceGraph</a> and <a href="https://about.gitlab.com/">GitLab</a> are also open-source.
  </p>

  <p>
    If the Lexoral codebase helps you to learn about programming, or you find a way to use my code in your own projects, I will be delighted.
    I think the Open-Source software movement is an amazing thing, and am glad to be doing my part.
  </p>

  <p>
    Lexoral is an ethical company, which means we want what's best for our customers, not for us.
    We can promise to be transparent, and promise to look after our customers, but those are hollow promises.
    Releasing our code <emph>forces</emph> us to be transparent, and <emph>forces</emph> us to look after our customers.
  </p>

  <p>
    I don't plan on becoming evil, but if I do, I've given you the tools to notice it and carry on without me.
    Running Lexoral is a priveledge, and being open-source means that as soon as I stop doing a good job, someone else can take over without my permission.
  </p>


  <h2>Conclusion</h2> -->

  <!-- GitHub link (and link to this post on github) -->

</BlogPost>