<script lang="ts">
  import BlogPost from "$lib/blog/BlogPost.svelte";
</script>

<BlogPost id="why-open-source">
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


  <h2>Conclusion</h2>

  <!-- GitHub link (and link to this post on github) -->

</BlogPost>