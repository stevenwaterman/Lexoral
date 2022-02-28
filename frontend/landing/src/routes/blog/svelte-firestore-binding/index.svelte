<script lang="ts">
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import Snippet from "$lib/blog/snippets/Snippet.svelte";
	import snippets from "./snippets";
</script>

<BlogPost id="svelte-firestore-binding">
  <p>
    I've always been weirdly fascinated by databases.
    It's probably a symptom of how I got into programming - abusing Excel spreadsheets to do things they were never meant to do.
    Still though, there's something satisfying about categorising data, querying it, and learning the answers to questions you never thought to ask.
  </p>

  <p>
    Databases, as a standalone application, are incredible pieces of engineering.
    <em>However</em>, I've definitely been frustrated at how hard it is to mesh the database with my application.
    You've probably felt it too.
  </p>

  <p>
    SQL feels like magic, but taking it to production is a delicate balancing act.
    ORMs promise the world, then make your life miserable as soon as you do something unexpected.
    You'll get it to work eventually, but good luck trying to explain it to anyone else!
  </p>

  <p>
    We've taken a totally different approach, writing a custom Svelte store that binds to Firestore.
    If you're not interested in how we did it, you can just <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/frontend/editor/src/utils/firestoreWritable.ts">read the code for yourself</a>.
    Otherwise, read on!
  </p>

  <h2>A cloud-native approach</h2>

  <p>
    Lexoral is <em>cloud-native</em>, which means we like confusing people with buzzwords and complicated architecture diagrams.
    It also means that Lexoral was built <em>around</em> its cloud platform, rather than just taking a finished product and deploying it onto the cloud.
    It means we take advantage of the more modern features, like serverless compute, process orchestration, and <em>Firestore</em>.
  </p>

  <figure>
    <img
      src="/assets/blog/svelte-firestore-binding/Pipeline.svg"
      alt="A complex diagram showing the components of Lexoral's transcription pipeline. The details aren't important, just know that it's a tangled mess of arrows between buckets, cloud functions, and workflows."
    />
    <figcaption>I mean, just look at our transcription pipeline...</figcaption>
  </figure>

  <p>
    Firestore is a cloud-hosted NoSQL database.
    Let me stress now that it's <em>not</em> a silver bullet, and it certainly has downsides just like SQL does.
    Querying is harder, and it's incredibly easy to mess up your database schema - because there isn't one.
    I'm not here to compare the two though.
    I'm here to show off the cool things you can do by fully embracing Firestore.
  </p>

  <p>
    Using the Firestore API, you can treat your database as one gigantic JSON object.
    It's a bit like having the entire database stored in the browser's memory - letting you read and write the data at any path straight from the client.
    Sounds scary, but Firestore has its own security layer, meaning you can restrict access to parts of the database depending on the user's authentication status.
    Essentially, you don't need a backend for <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a>.
    That's great, but it gets better.
  </p>

  <p>
    Firestore's real value comes when you <em>subscribe</em> to a path in the database, getting real-time updates whenever the data changes.
    Those reactive database queries pair <em>really</em> nicely with Svelte's reactive updates.
    If you haven't heard of <a href="https://svelte.dev">Svelte</a> before, it's a frontend framework that selectively re-renders parts of the web page when variables are updated.
    It's not a runtime library, like React or Vue, instead it traverses the dependency graph between your variables at compile-time and custom-generates code to surgically update the DOM.
    You can probably see how it fits in with Firestore.
  </p>

  <p>
    Combining the two, our app can display a value from the database, updating the display whenever the value changes.
    Even better, we can use Svelte's <a href="https://svelte.dev/docs#run-time-svelte-store">store API</a>, creating a data container that keeps <em>itself</em> in sync with the database.
    Then, if we wanted to an up-to-date display of how much credit you have, it would be as simple as:
  </p>

  <Snippet config={snippets.creditExample} />

  <p>
    In that example, the store is read-only, but Svelte supports read-write stores too.
    Writable stores are especially fancy because you can bind them to an HTML <em>input</em> element.
    Any time the user adjusts the input value, Svelte automatically updates the store for you.
    Since users aren't allowed to give themselves free credit (sorry), let's have a look at a volume slider instead:
  </p>

  <Snippet config={snippets.volumeExample} />

	<p>
    With a custom store implementation, that's all it takes to get a two-way database binding.
    A volume slider that stores your preference in the database, and synchronises across tabs, days, or even devices.
    You can adjust the slider on one tab and watch it move on the other.
    Sounds like magic!
  </p>

  <p>
    It's probably obvious by now, but none of this is hypothetical.
    I've actually just described exactly how Lexoral handles your volume settings, behind the scenes.
    That hypothetical read-write store is real, and <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/frontend/editor/src/utils/firestoreWritable.ts">we use it in production</a>.
    Here's how we did it.
  </p>

  <h2>Ruining the magic</h2>

  <p>
    Our custom store wasn't some grand vision, it was built up piece-by-piece over time.
    Rather than looking at the finished product and trying to explain it to you, let's retrace our steps.
    We'll start with something simple, and add features until we get to today.
  </p>

  <p>
    It all began as a basic read-only store, like in the credit example from earlier.
    Internally, it had a native writable store, which got updated whenever the database value changed.
    We could have written it all from scratch, but wrapping a native store means we don't have to re-create all that subscription logic - we just expose the <code>subscribe</code> method from the inner store instead:
  </p>

  <Snippet config={snippets.stage1} />

  <p>
    It might look a little complicated at first, but there's really not much to it.
    We created a new class that implements the <code>Readable</code> store inferface.
    In the constructor, it accepts a reference to a Firestore document, similar to a file path.
  </p>

  <p>
    For Lexoral, that's usually something like <code>/users/{"{uid}"}/settings/audio</code> - meaning Firestore can check the current user's ID against the ID in the requested document.
    Our store then starts listening for changes to the document, and updating <code>remoteStore</code> when they happen.
    Any calls to <code>subscribe</code> are passed to the internal store, meaning all our subscribers get notified of that update.
  </p>

  <p>
    That's already pretty useful, but a writable store would be even nicer.
    Thankfully, it's not complicated to add a method that updates the database:
  </p>

  <Snippet diffFrom={snippets.stage1} config={snippets.stage2} />

  <p>
    Those of you familiar with Svelte and its store inferface will notice that this method is called <code>commit</code> rather than <code>set</code>.
    That means it's <em>not</em> a valid <code>Writable</code> store.
    It seems strange, but it's a deliberate choice.
  </p>

  <p>
    The main reason for calling the method <code>commit</code> rather than <code>set</code> is that we have <em>already</em> violated the spec.
    Notice that we enable the <code>merge</code> option when updating the database with <code>setDoc</code>.
    That means that when you call <code>commit</code> with an argument, the new value in the database <em>isn't</em> the argument you provided.
    Instead, your argument is merged with the existing data, like a patch, or a list of overrides.
  </p>

  <p>
    Compare that to the <code>Writable</code> interface - which expects the new value to be exactly what you passed in.
    It makes sense to stray from the spec here, because it's quite rare that you want to replace an entire document in Firestore.
    Much more often, you just want to edit one or two fields.
    This will be important later, but we've got more pressing issues right now!
  </p>

  <p>
    Currently, our store connects to the database as soon as it's created - but the user might not be authenticated yet.
    We could just accept that, and demand that no stores are created until the user is logged in, but it's easy to mess up and hard to debug.
    If we get it wrong, Firestore will start throwing errors.
    Users are only allowed to read and write their own data, but without being logged in there's no way for Firestore to check who's asking.
  </p>

  <p>
    Instead, we'll separate the startup sequence into two steps.
    When the store is created, it won't connect to Firestore immediately.
    Then, once the user is logged in and Firebase is initialised, we can set up that database connection.
    Any attempts to update the store value before then will be rejected:
  </p>

  <Snippet diffFrom={snippets.stage2} config={snippets.stage3} />

  <p>
    Perfect!
    That store now does everything we need it to.
    It's a two-way binding to Firestore, and it doesn't even crash on startup!
    The implementation is perfect, and has no issues whatsoever, as long as you ignore the fact that it costs a fortune and the performance is terrible.
    What's up with that?
  </p>

  <p>
    With Firestore, it's vital that you limit the number of database writes.
    Every time you change something, you have to pay.
    Making things worse, Firestore can only handle about one write per second, on a given document.
    Currently, we write to the database every time the store value changes - which could be 10+ times per second.
    It'll get expensive and slow, fast.
  </p>

  <p>
    Clearly we need to reduce how often we write to the database.
    We could <em>try</em> asking the users to stop adjusting their volume so fast, but I think we can find a more robust solution!
    There's no reason why we need to push updates so often, so let's batch them up and combine all the updates into one:
  </p>

  <Snippet diffFrom={snippets.stage3} config={snippets.stage4} />

  <p>
    Rather than immediately sending changes to the database, <code>commit</code> now <em>stores</em> the pending updates until <code>push</code> is called.
    You might be surprised to see that you can <code>commit</code> before setting up a database connection. 
    Since it's just updating our local state, that check has been moved to <code>push</code> instead.
  </p>

  <p>
    The internal structure of this store is getting more and more complex, so let me introduce the two new stores.
    The first, <code>stageStore</code>, contains all the updates that have been made locally but not pushed to Firestore yet.
    Meanwhile, any calls to <code>subscribe</code> are passed to <code>localStore</code>, which is derived from the other two.
    It applies the pending updates onto the current database value to create the most up-to-date view possible.
  </p>

  <p>
    It's not until <code>push</code> is called that we actually send anything to the database.
    It performs a single database write which combines all the commits together into one, then clears the pending store.
    By grouping the updates and only writing to the database when necessary, we reduce the cost to a fraction of what it was before, and there's no more performance bottlenecks.
    Since each user is writing to their own document, the only way to write to a document more than once a second is to use two devices simultaneously.
  </p>

  <p>
    Since <code>localStore</code> is the one you subscribe to, there's no visible difference between pushing updates immediately and batching them up.
    Either way, your changes are visible immediately on the current tab.
    Calling <code>push</code> just saves them to the database, meaning they are applied to all your devices. 
  </p>

  <p>
    However, it's hard to know <em>when</em> to call <code>push</code>.
    If you forget, then you never save that data and it will be lost.
    If you do it too much, you're wasting money and ruining the performance.
    In general, it's just not a very ergonomic API.
    What if we automated it?
  </p>

  <Snippet diffFrom={snippets.stage4} config={snippets.stage5} />

  <p>
    Now our changes are batched up and automatically pushed to Firestore after a period of inactivity.
    Any time we commit something, a timer is started - lasting one second by default.
    If we commit something else before then, the timer resets.
    If not, then we push the changes when the timer runs out.
  </p>

  <p>
    One second might not seem like very long, but you have to remember the end goal.
    We want to bind this store to a slider, which can cause 60 commits per second when you're adjusting it.
    However, you're unlikely to pause for more than a second when adjusting the volume.
    One second is a nice middle ground that ensures it rarely pushes until you're done, while still having a minimal delay.
  </p>

  <p>
    It's also adjustable - when creating the store, you can choose a higher or lower delay based on your use case.
    There's not much risk in setting it a bit high - pending updates are still applied to your local window instantly.
    A ten-second debounce timer would just mean a ten-second delay before your volume synchronises across devices.
  </p>

  <p>
    We've talked a lot about binding this store to a volume slider, but how would that work?
    It's not a valid <code>Writable</code>, and it's not even storing a numeric value!
    Our store represents an entire Firestore document, meaning a JSON object - not exactly something you could update with a slider.
  </p>

  <p>
    To solve that, let's add a way to get a <code>Writable</code> stores bound to a specific <em>field</em> on the document.
    In other words, take our <code>audio settings</code> store and create a <code>volume</code> store for its volume field.
    For now, it's read-only:
  </p>

  <Snippet diffFrom={snippets.stage5} config={snippets.stage6} />

  <p>
    We've added a new Svelte store implementation, <code>FirestoreWritableField</code>.
    As the name suggests, it binds to a specific field on the Firestore document.
    It's not meant to be created directly by the user - instead we've added <code>getField</code> onto the original store.
  </p>

  <p>
    The child store is implemented using a <code>derived</code> store, which simply extracts the required field from the value of the parent store.
    Any time the parent store updates, we check to see if our field has changed, and if so, notify our subscribers.
    Despite the name of the class, it's not actually writable yet, so let's make it a valid Svelte <code>Writable</code> by adding <code>set</code> and <code>update</code>:
  </p>

  <Snippet diffFrom={snippets.stage6} config={snippets.stage7} />

  <p>
    There's no need to worry about Firestore when writing these methods - we simply propagate the calls up to the parent and set the value for our field.
    That's why it was so important for us to be able to apply a partial patch to the parent store - it allows these single-field stores to be standalone.
  </p>

  <p>
    That store implementation is looking pretty good now!
    It's got everything we need to actually use it in an application, so let's try it out:
  </p>

  <Snippet config={snippets.finalTs} />
	<Snippet config={snippets.finalSvelte} />

  <p>
    In <code>audio.ts</code>, we create a new store, binding it to the document at a specific path in Firestore.
    We set the initial values for the document, which get used if the document doesn't exist or we haven't called <code>connect</code> yet.
    The call to <code>connect</code> isn't shown in this example, since it would normally be in a post-authentication callback.
  </p>

  <p>
    Then, in <code>Volume.svelte</code>, we extract the <code>volume</code> field from the document into its own store.
    We create a slider element, and bind its value to the volume store.
    That's all it takes to get a two-way database binding.
  </p>

  <p>
    Whenever the volume field updates on the Firestore document, the volume slider will jump to its new position.
    Whenever the slider is adjusted, then after one second of no further changes it will push its new value to Firestore!
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
    I'm not saying that you should take our code and use it yourself (but if you want to, <a href="https://github.com/stevenwaterman/Lexoral/blob/stage/frontend/editor/src/utils/firestoreWritable.ts">you can</a>).
    I <em>am</em> saying that cloud-native development is a crazy, magical place, where you need to think outside of the box.
    Creating our custom store implementation was a slow process, where we had a problem, fixed it, and moved on to the next one.
    There was no grand vision, just an emergent solution based on the problems we faced.
  </p>

  <p>
    It's easy to get stuck in the patterns of what you're used to doing.
    I'm new to cloud-native development, and a solution based on my old ways of thinking would have looked very different.
    It would be full of http calls, manual state management, and probably full of bugs too.
  </p>

  <p>
    By allowing myself to think outside the box, the solution is much nicer.
    While I've always enjoyed working <em>on</em> the data layer, I finally have one that I enjoy working <em>with</em>.
  </p>
</BlogPost>
