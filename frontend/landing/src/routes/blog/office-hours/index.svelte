<script lang="ts">
	import BlogPost from "$lib/blog/BlogPost.svelte";
  import Calendly from "$lib/components/Calendly.svelte";
</script>

<style>
  .calendlyCenter {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>

<BlogPost id="office-hours">

  <p>
    I've never been someone to do things in the 'normal' way.
    I try not to follow (or break) best practice until I understand <em>why</em> it's best.
    Sometimes it's great to think outside the box, and sometimes it means I take a bold leap into the unknown.
  </p>

  <p>
    This is in the second category.
  </p>

  <h2>Office Hours</h2>

  <p>
    At university, professors have a few hours each week called <em>office hours</em>.
    During those slots, students can turn up and talk to them for any reason.
    They might need guidance about an assignment, they might need a specific topic explaining, or they might just want a casual chat about the professor's research.
  </p>

  <p>
    <strong>I have office hours now.</strong>
    They're not <em>quite</em> the same, because you need to book a slot and tell me what you want to talk about.
    Other than that, it's a pretty similar concept.
  </p>

  <p>
    Every day, at <strong>8:30, 12:30, and 20:00 UTC</strong>, I am available to video chat for half an hour.
    <em>Anyone</em> can book a slot, for <em>any</em> reason, and I'm not going to complain if it's only 10 mins.
  </p>

  <p>
    You could:
  </p>

  <ul>
    <li>Give feedback about Lexoral</li>
    <li>Ask questions about Lexoral</li>
    <li>Get help self-hosting Lexoral</li>
    <li>Get feedback about your projects</li>
    <li>Ask for my advice</li>
    <li>Teach me something cool</li>
    <li>See my cat, live</li>
  </ul>

  <p>
    Seriously.
    If you want to talk to me, I'm waiting:
  </p>

  <div class="calendlyCenter">
    <Calendly/>
  </div>

  <h2>Why?</h2>

  <p>
    That's a pretty reasonable question.
    This isn't exactly a common thing to do, and people are generally very protective over their time.
  </p>

  <p>
    Earlier this week, I was at a workshop about networking.
    As they discussed all the different kinds of networking events, I felt my heart sink.
    Nothing appealed, and every kind of event sounded really stressful and tense.
    Was I just doomed to never build a network?
  </p>

  <p>
    No, that's ridiculous.
    I <em>can</em> network, those events just aren't the right way for me.
    My ideal networking event would be:
  </p>

  <ul>
    <li>Informal</li>
    <li>Structured</li>
    <li>Over Video Chat</li>
  </ul>

  <p>
    I thought about what kind of event could achieve all of that.
    Surprisingly, I <em>didn't</em> think of office hours.
    I thought of my blog posts, and especially the conclusions.
  </p>

  <p>
    Ever since I started writing blog posts, I've always ended with an open invite to email me.
    <strong>A lot of people do.</strong>
    Those emails are some of my favourite to receive, and it's rarely just a one-off message.
    We'll start chatting, have some back-and-forth, and end up on a call.
  </p>

  <p>
    However, not everyone wants to use email, and I'm happy to video-call strangers<sup>1</sup>.
  </p>

  <h2>Conclusion</h2>

  <p>
    Lexoral is built on trust, openness, and transparency.
    I've always been available to chat with anyone, and now I've taken that a step further by adding office hours into the mix.
    If you want to chat with me, for any reason, get in touch.
  </p>

  <p>
    Use whichever method you're most comfortable with:
  </p>

  <ul>
    <li>Email: <a href="mailto:steven@lexoral.com">steven@lexoral.com</a></li>
    <li>Twitch: <a href="https://twitch.tv/lexoral">Mon/Wed/Fri/Sat/Sun 8:30am UTC @lexoral</a></li>
    <li>Twitter: <a href="https://twitter.com/lexoral">@lexoral</a></li>
    <li>Slack: <a href="http://slack.lexoral.com">slack.lexoral.com</a></li>
    <li>Or <a href="https://calendly.com/lexoral/office-hours">book a time to chat!</a></li>
  </ul>

  <p>
    Please don't be shy, I'm excited to chat with you ♥
  </p>

  <div class="calendlyCenter">
    <Calendly/>
  </div>

  <br>
  <hr>

  <h2>Footnotes</h2>

  <p>
    <sup>1</sup>
    It's interesting, because I'm usually quite anxious about phone calls, and would absolutely be the kind of person that still emails instead of using someone's office hours.
    For some reason, I feel fine about this.
    I think it's a combination of things:
  </p>

  <ul>
    <li>I find video chat much less stressful than phone calls</li>
    <li>I'm in a position of power because you're the instigator</li>
    <li>You tell me what you want to chat about when booking</li>
  </ul>

  <p>
    Just thought that was a fun observation!
  </p>

</BlogPost>
