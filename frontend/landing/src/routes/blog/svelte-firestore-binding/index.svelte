<script lang="ts">
	import BlogPost from "$lib/blog/BlogPost.svelte";
	import Snippet from "$lib/blog/snippets/Snippet.svelte";
	import snippets from "./snippets";
</script>

<BlogPost id="svelte-firestore-binding">
	<p>
    I'm a big fan of Firestore, because it provides a very high-level view of the database.
    It has its downsides, but most of the time it just feels like you're working with data in-memory.
    I'm <em>also</em> a big fan of Svelte, and especially its <strong>store</strong> API.
    Svelte stores are very simple observable data containers, which can either be created atomically with read-write access, or derived from a set of other stores.
    I'm going to assume that you know what svelte stores are, but you can read more about them here: TODO
  </p>
    
  <p>
    In this post, I'll talk about a utility class we use a lot in Lexoral, that exposes a firestore document as a svelte store.
    The end result is a svelte store with two-way bindings to firestore.
    Any time the svelte store is written to, those changes are eventually persisted to firestore.
    Any time the data in firestore changes, the svelte store updates to. And because it's a svelte store, you can do crazy things like binding a HTML slider to a value in firestore:
  </p>

	<Snippet config={snippets.exampleTs} />
	<Snippet config={snippets.exampleSvelte} />

  <p>
    In under 20 lines, we've made a slider that controls a value in the database.
    That works in both directions too - if the value in firestore changes, the slider will update too.
    If we change the slider, the new value will be persisted in the database.
  </p>

  <p>
    It's not just sliders either, we could bind a text box to a string field, or a checkbox to a boolean.
    What's going on here?
  </p>

  <h2>Pulling back the curtain</h2>

  <p>
    Our custom Svelte store wasn't some grand vision implemented from scratch, it was built up piece-by-piece.
    Rather than trying to explain it to you, let's explain how we ended up here.
  </p>

  <p>
    It started off as a simple wrapper around a native writable store.
    We listen for updates from the database and update the inner store accordingly.
    Any store needs a <code>subscribe</code> method, so we expose the one from the inner store.
  </p>

  <Snippet config={snippets.stage1} />

  <p>
    That's all it takes to get a read-only store that binds to firestore.
    Whenever an update comes in, we set the value on the inner store which notifies all the subscribers.
    It's perfect for displaying database value on the frontend - such as your current credit.
  </p>

  <p>
    While your current credit is (sadly) not editable, a read-only store is pretty limiting.
    For example, a read-write binding would mean we could synchronise your volume or playback speed between tabs and even across devices.
    Thankfully, making the store writable is an easy task:
  </p>

  <Snippet diffFrom={snippets.stage1} config={snippets.stage2} />

  <p>
    Those of you familiar with Svelte and its store inferface will notice that this method is called <code>commit</code> rather than <code>set</code>.
    That means it's not a valid <code>Writable</code> store.
    It seems strange, but it's a logical decision.
  </p>

  <p>
    The main reason for calling the method <code>commit</code> rather than <code>set</code> is because we're already violating the spec.
    Notice the <code>setDoc</code> call with <code>merge</code> option active.
    In a writable Svelte store, you expect the store value to be set to exactly what you pass in as the new value.
    In our store, and in firestore, we actually use a patching interface, allowing you to update one field without knowing the value of all the others.
  </p>

  <p>
    First, we have more pressing issues.
    Currently, our store connects to the database as soon as it is created - but there's no guarantee the user is authenticated yet.
    We could just accept that, and demand that no stores are created until the user is logged in, but it's easy to mess up and hard to debug.
  </p>

  <p>
    Instead, we'll separate it into two steps.
    When our store is created, it doesn't connect to firestore straight away.
    Then, once the user is logged in and firebase is initialised, we can set up the database connection.
    Any attempts to update the store value before then will just throw an error:
  </p>

  <Snippet diffFrom={snippets.stage2} config={snippets.stage3} />

  <p>
    Perfect!
    That store now does everything we need it to.
    It's a two-way binding to firestore, and it doesn't even crash on startup!
    There's one small problem: cost.
    The performance sucks too.
  </p>

  <p>
    With firestore, you need to try and limit the number of database writes.
    Not only do you have to pay for each write, it's actually not possible to update a single document more than about once per second.
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
    Rather than pushing updates immediately, <code>commit</code> now updates the staging area, and the database write doesn't happen until <code>push</code> is called.
    That lets us batch up the updates, and only write to the database when necessary.
    The cost is a fraction of what it was before, and there's no more performance bottlenecks.
  </p>

  <p>
    Also notice that there's no check in <code>commit</code> to make sure we have connected the store to firestore.
    It's not necessary any more, since we can just cache the changes until we are connected.
    This is actually how the demo functionality works in Lexoral - we still use these firestore binding stores, but simply never connect them to the database.
  </p>

  <p>
    However, it's easy to forget to call <code>push</code>.
    It's easy to call it too much.
    In general, it's not very nice to work with.
    What if we automated it?
  </p>

  <Snippet diffFrom={snippets.stage4} config={snippets.stage5} />

  <p>
    In this latest version, any changes to our local store are batched up and automatically pushed to firestore after a period of inactivity.
    Any time we commit something, a timer is started - which lasts one second by default.
    If we commit something else before then, the timer resets.
    If not, then we push the changes when the timer runs out.
  </p>

  <p>
    One second might not seem like very long, but you have to remember that the end goal is to bind a slider to this store.
    Moving the slider causes up to 60 commits per second!
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
    To solve that, we provide a way to create a valid <code>Writable</code> store, bound to a specific <em>field</em> on a firestore document.
    For now, it's read-only:
  </p>

  <Snippet diffFrom={snippets.stage5} config={snippets.stage6} />

  <p>
    So given a <code>FirestoreWritable</code> for my audio settings, we can call <code>getField("volume")</code>.
    That gives us a store that just represents the volume field on the audio settings document.
    Not much use if we can't update the value, so let's make it a valid <code>Writable</code> by adding <code>set</code> and <code>update</code>:
  </p>

  <Snippet diffFrom={snippets.stage6} config={snippets.stage7} />

  <p>
    Both of these methods eventually just propagate their update to the parent store.
    That's why it was so important to be able to perform a partial update - we want these single-field stores to be standalone.
    We're now at the point where we can take a look back at the example I showed you at the start:
  </p>

  <Snippet config={snippets.exampleTs} />
	<Snippet config={snippets.exampleSvelte} />

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
    There is still one issue with our current implementation - it can be quite wasteful in terms of memory.
    Every time we call <code>getField</code> to get the volume store, it creates a new one, even though they're all identical.
    We can solve that with a cache in the parent store:
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
