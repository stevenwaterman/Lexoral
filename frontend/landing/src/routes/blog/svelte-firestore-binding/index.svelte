<script lang="ts">
	import BlogPost from "$lib/blog/BlogPost.svelte";
  import Diff from "$lib/blog/snippets/Diff.svelte";

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
  <Snippet config={snippets.stage1} />
  <Diff from={snippets.stage1} to={snippets.stage2} />
  <Diff from={snippets.stage2} to={snippets.stage3} />
  <Diff from={snippets.stage3} to={snippets.stage4} />
  <Diff from={snippets.stage4} to={snippets.stage5} />
  <Diff from={snippets.stage5} to={snippets.stage6} />
  <Diff from={snippets.stage6} to={snippets.stage7} />
  <Diff from={snippets.stage7} to={snippets.stage8} />
</BlogPost>
