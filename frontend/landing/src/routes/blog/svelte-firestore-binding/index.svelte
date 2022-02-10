<script lang="ts">
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import Snippet from "$lib/blog/snippets/Snippet.svelte";
	import snippets from "./snippets";
</script>

<BlogPost id="svelte-firestore-binding">
  <p>
    I've always been weirdly fascinated by databases.
    It's probably a symptom of how I got into programming - abusing excel spreadsheets to do things they were never meant to.
    Still though, there's something satisfying about categorising data, querying it, and learning answers to the questions you never thought to ask.
  </p>

  <p>
    Databases, as a standalone application, are incredible pieces of engineering.
    <em>However</em>, I've definitely been frustrated at how hard it is to mesh the database with your application.
    You've probably felt that too.
  </p>

  <p>
    SQL feels like magic, but taking it to production is a delicate balancing act.
    ORMs promise the world, then make your life miserable as soon as you stray from the well-beaten path.
    You'll get it to work eventually, but good luck trying to explain it to anyone else!
  </p>

  <h2>A cloud-native approach</h2>

  <p>
    Lexoral is <em>cloud-native</em>, which means we like using buzzwords that nobody really understands.
    It also means that Lexoral was built around the cloud platform, rather than just taking a finished product and deploying it on the cloud.
    It means we take advantage of the more modern features, like serverless compute, process orchestration, and <em>Firestore</em>.
  </p>

  <p>
    Firestore is a cloud-hosted NoSQL database.
    Using the Firestore API, you treat your database as one gigantic JSON object.
    It's a bit like having the entire database stored in memory - letting you read and write the data at any path.
    That's great, but it gets better.
  </p>

  <p>
    Firestore's real value comes when you <em>subscribe</em> to a path in the database, getting real-time updates whenever the data changes.
    Those reactive database queries pair <em>really</em> nicely with Svelte's reactive frontend updates.
    Combining the two, our app can display a value from the database, updating whenever the database is updated.
    Even better, we could utilise Svelte's <em>store</em> API, creating a data container that is always in sync with the database:
  </p>

  <Snippet config={snippets.creditExample} />

  <p>
    In that example, the store is read-only, but Svelte supports read-write stores too.
    Writable stores are especially fancy because you can bind them to an HTML input element.
    Since users aren't allowed to give themselves free credit (sorry), let's have a look at a volume slider instead:
  </p>

  <Snippet config={snippets.volumeExample} />

	<p>
    With a custom store implementation, that's all it takes to get a two-way database binding.
    A volume slider that stores your preference in the database, and synchronises across tabs, days, and devices.
    You can adjust the slider on one tab and watch it move on the other.
    Sounds great!
  </p>

  <h2>Ruining the magic</h2>

  <p>
    Our custom store wasn't some grand vision, it was built up piece-by-piece over time.
    Rather than looking at the finished product and trying to explain it to you, let's start with something simple and work our way up.
  </p>

  <p>
    It started off as a simple read-only store, like in the credit example from earlier.
    Internally, it had a native writable store, which got updated whenever the database value changed.
    Any store needs a <code>subscribe</code> method, so we expose the one from the native store:
  </p>

  <Snippet config={snippets.stage1} />

  <p>
    It might look a little complicated, but there's really not much to it.
    We created a new class that implements the <code>Readable</code> store inferface.
    In the constructor, it listens for changes to the document, and updates <code>remoteStore</code> when they happen.
    Since any calls to <code>subscribe</code> are passed to the internal store, any changes to that store update our subscribers!
  </p>

  <p>
    That's already pretty useful, but a writable store would be even nicer.
    Thankfully, it's not complicated to add:
  </p>

  <Snippet diffFrom={snippets.stage1} config={snippets.stage2} />

  <p>
    Those of you familiar with Svelte and its store inferface will notice that this method is called <code>commit</code> rather than <code>set</code>.
    That means it's not a valid <code>Writable</code> store.
    It seems strange, but it's a deliberate choice.
  </p>

  <p>
    The main reason for calling the method <code>commit</code> rather than <code>set</code> is because we're already violating the spec.
    Notice the <code>setDoc</code> call with <code>merge</code> enabled.
    In a writable Svelte store, you expect the new value to be set to exactly what you pass in.
    In this case, you're actually providing a <em>patch</em> - a partial override.
    That allows you to update one field without knowing the value of all the others, which is important later.
  </p>

  <p>
    First, we have more pressing issues.
    Currently, our store connects to the database as soon as it is created - but there's no guarantee the user is authenticated yet.
    We could just accept that, and demand that no stores are created until the user is logged in, but it's easy to mess up and hard to debug.
  </p>

  <p>
    Instead, we'll separate it into two steps.
    When our store is created, it doesn't connect to Firestore straight away.
    Then, once the user is logged in and Firebase is initialised, we can set up the database connection.
    Any attempts to update the store value before then will just throw an error:
  </p>

  <Snippet diffFrom={snippets.stage2} config={snippets.stage3} />

  <p>
    Perfect!
    That store now does everything we need it to.
    It's a two-way binding to firestore, and it doesn't even crash on startup!
    The implementation is perfect, and has no issues whatsoever, as long as you ignore the fact that it costs a fortune and the performance is terrible.
    What's up with that?
  </p>

  <p>
    With Firestore, it's vital that you limit the number of database writes.
    Not only do you have to pay for each write, Firestore can only update a document about once per second.
    Currently, we write to the database every time the store value changes - which could be 10+ times per second.
    It'll get expensive and slow, fast.
  </p>

  <p>
    To avoid those issues, we need to minimise the number of database writes.
    There's no reason why we need to push updates to firestore that often, so let's batch them up and combine updates into one:
  </p>

  <Snippet diffFrom={snippets.stage3} config={snippets.stage4} />

  <p>
    You'll notice that we now have 3 internal stores.
    The new <code>stageStore</code> contains the updates that have been made locally but not pushed to firestore yet.
    <code>localStore</code> is derived from the other two, combining their values to show us what the current state is - aka what the remote state would be after a push.
  </p>

  <p>
    Rather than pushing updates immediately, <code>commit</code> stores the pending updates and doesn't write to the database until <code>push</code> is called.
    By batching the updates and only writing to the database when necessary, we significantly the cost is a fraction of what it was before, and there's no more performance bottlenecks.
  </p>

  <p>
    You might be surprised to see that you can now call <code>commit</code> without connecting to the database. 
    Since it's just updating our local state, that check has been moved to <code>push</code> instead.
  </p>

  <p>
    However, it's hard to know when to call <code>push</code>.
    If you forget, then you never save that data.
    If you do it too much, you're wasting money and ruining the performance.
    In general, it's just not a very ergonomic API.
    What if we automated it?
  </p>

  <Snippet diffFrom={snippets.stage4} config={snippets.stage5} />

  <p>
    Now any changes to our local store are batched up and automatically pushed to firestore after a period of inactivity.
    Any time we commit something, a timer is started - which lasts one second by default.
    If we commit something else before then, the timer resets.
    If not, then we push the changes when the timer runs out.
  </p>

  <p>
    One second might not seem like very long, but you have to remember that the end goal is to bind a slider to this store.
    Adjusting the slider can cause 60 commits per second!
    A one-second debounce timer is enough to reduce the number of database writes to one, without really affecting the user experience.
    Remember that any commits are made instantly on the current window, the debounce timer just delays them being written to firstore and pushed to other sessions.
  </p>

  <p>
    Speaking of binding the store to a slider, how would that work?
    It's not a valid <code>Writable</code>.
    Even if it was, our store represents an entire firestore document, which is a JSON object.
    Not exactly something you could update with a slider.
  </p>

  <p>
    To solve that, let's provide a way to get <code>Writable</code> stores bound to specific <em>fields</em> on the document.
    In other words, take our 'audio settings' store and create a 'volume' store for its volume field.
    For now, it's read-only:
  </p>

  <Snippet diffFrom={snippets.stage5} config={snippets.stage6} />

  <p>
    So given a <code>FirestoreWritable</code> for my audio settings, we can call <code>getField("volume")</code>.
    The resulting store is a bound to <em>just</em> the volume field on that document.
    Then, let's make it a valid <code>Writable</code> by adding <code>set</code> and <code>update</code>:
  </p>

  <Snippet diffFrom={snippets.stage6} config={snippets.stage7} />

  <p>
    Both of these functions eventually call <code>commit</code> on the parent.
    That's why it was so important to be able to perform a partial update - it allows these single-field stores to be standalone.
  </p>

  <p>
    That store implementation is looking pretty good now, so let's see it in action:
  </p>

  <Snippet config={snippets.finalTs} />
	<Snippet config={snippets.finalSvelte} />

  <p>
    In <code>audio.ts</code>, we create a new store, binding it to the document at a specific path in firestore.
    We set the initial values for the document, which get used if the document doesn't exist or we haven't called <code>connect</code> yet.
    The call to <code>connect</code> isn't shown in this example, and it would probably be called in a post-authentication callback.
  </p>

  <p>
    Then, in <code>Volume.svelte</code>, we extract the <code>volume</code> field from the document into its own store.
    We create a slider element, and bind its value to the volume store.
    That's all it takes to get a two-way database binding.
  </p>

  <p>
    Whenever the volume field updates on the firestore document, the volume slider will jump to its new position.
    Whenever the slider is adjusted, then after one second of no further changes it will push its new value to firestore!
  </p>

  <p>
    There is still one issue with our current implementation - it's quite wasteful.
    Every time we call <code>getField</code>, it creates a new store, even though all the stores for a given field are identical.
    We can solve that by adding a cache:
  </p>

  <Snippet diffFrom={snippets.stage7} config={snippets.stage8} />

  <p>
    With that, we're at the current version!
    I'm sure we'll make more changes in future - all the <code>get_store_value</code> calls are pretty inefficient and begging to be replaced.
    However, we're nitpicking at magic by this point.
  </p>

  <p>
    In just a few lines of code, we can create a two-way real-time database binding.
    We can cache the changes, reducing load and minimising cost.
    We can synchronise across tabs, windows, devices, and across the world.
  </p>

  <h2>Conclusion</h2>

  <p>
    I'm not saying that you should take our code and use it yourself (but if you want to, <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/frontend/editor/src/utils/firestoreWritable.ts" rel="external">you can</a>).
    I <em>am</em> saying that cloud-native development is a crazy, magical place, where you need to think outside of the box.
    Creating our custom store implementation was a slow process, where we had a problem, fixed it, and moved on to the next one.
    There was no grand vision, just an emergent solution based on the problems we faced.
  </p>

  <p>
    I'm new to cloud-native development, and a solution based on my old ways of thinking would have looked very different.
    There would have been a lot of http calls, a lot of confusing state management, and probably a lot of bugs.
    By leaning in and taking advantage of all the tools available to us, the solution is so much better.
  </p>
</BlogPost>
