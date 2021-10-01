<script lang="ts">
  import { getDb } from "../db";
  import { collection, getDocs, limit, onSnapshot, orderBy, query, QueryDocumentSnapshot, startAfter, where } from "firebase/firestore";
  import type { DocumentData, QuerySnapshot } from "firebase/firestore";
  import Transcript from "./Transcript.svelte";
  import { userStore } from "../auth/user";
  import type { User } from "firebase/auth";
  import Loading from "../Loading.svelte";

  const pageSize = 10;

  let sort: "name" | "audio.duration" | "created" | "updated" = "updated";
  let direction: "asc" | "desc" = "desc";

  function setSort(newSort: typeof sort) {
    if (sort === newSort) {
      if (direction === "asc") direction = "desc"
      else direction = "asc";
    } else {
      sort = newSort;
      if (sort === "name") direction = "asc";
      else if (sort === "audio.duration") direction = "asc";
      else if (sort === "created") direction = "desc";
      else if (sort === "updated") direction = "desc";
    }
  }

  function changeSort(user: User, order: typeof sort, dir: typeof direction) {
    const transcriptCollection = collection(getDb(), "users", user.uid, "transcripts");
    const q = query(transcriptCollection, orderBy(order, dir), limit(pageSize));

    const page: QueryDocumentSnapshot<DocumentData>[] = [];

    unsub();
    unsub = onSnapshot(q, snapshot => {
      page.splice(0, page.length, ...snapshot.docs);
      pages = [page];
    })
  }

  function loadMore() {
    if (loadingMore) return;
    if (!user) return;
    if (!sort) return;
    if (!direction) return;

    const lastPageIdx = pages.length - 1;
    if (lastPageIdx === -1) return;

    const lastPage = pages[lastPageIdx];
    if (lastPage === undefined) return;
    const lastDocument = lastPage[lastPage.length - 1];
    if (lastDocument === undefined) return;

    loadingMore = true;

    const transcriptCollection = collection(getDb(), "users", user.uid, "transcripts");
    const q = query(transcriptCollection, orderBy(sort, direction), startAfter(lastDocument), limit(pageSize));

    const page: QueryDocumentSnapshot<DocumentData>[] = [];

    const oldUnsub = unsub;
    const newUnsub = onSnapshot(q, snapshot => {
      page.splice(0, page.length, ...snapshot.docs);
      pages = pages;
    });

    unsub = () => {
      oldUnsub();
      newUnsub();
    }

    pages.push(page);
    loadingMore = false;
  }

  let unsub: () => void = () => {};
  let pages: QueryDocumentSnapshot<DocumentData>[][] = [];
  let transcripts: QueryDocumentSnapshot<DocumentData>[];
  $: transcripts = pages.flat();

  function last<T>(list: T[] | undefined): T | undefined {
    if (list === undefined) return undefined;
    const length = list.length;
    if(length === 0) return undefined;
    const last = length - 1;
    return list[last] as T;
  }

  let loadingMore: boolean = false;
  let allLoaded: boolean;
  $: allLoaded = (last(pages)?.length ?? -1) < pageSize;

  let user: User | null | undefined;
  $: user = $userStore;

  $: if (user) changeSort(user, sort, direction);
</script>

<style>
  .table {
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 1em;
    display: grid;
    grid-template-columns: repeat(5, 1fr) auto;

    overflow-y: auto;
    width: 100%;
    box-sizing: border-box;
  }

  .header {
    position: sticky;
    top: 0;

    background-color: var(--page-background);
    font-weight: bold;
    border-bottom: 1px solid black;
    user-select: none;
    margin-bottom: 0.5em;
  }

  .header.sortable {
    cursor: pointer;
  }

  .header.sortable:hover {
    background-color: var(--blue-3);
  }

  .empty {
    grid-column: span 5;
    text-align: center;
  }
  
  li {
    display: contents;
  }
</style>

<ol class="table">
  <li>
    <span class="header sortable" on:click="{() => setSort("name")}">
      Name
      {#if sort === "name"}
        {#if direction === "asc"}
          ▲
        {:else}
          ▼
        {/if}
      {/if}
    </span>

    <span class="header sortable" on:click="{() => setSort("audio.duration")}">
      Length
      {#if sort === "audio.duration"}
        {#if direction === "asc"}
          ▲
        {:else}
          ▼
        {/if}
      {/if}
    </span>

    <span class="header sortable" on:click="{() => setSort("created")}">
      Created
      {#if sort === "created"}
        {#if direction === "asc"}
          ▲
        {:else}
          ▼
        {/if}
      {/if}
    </span>

    <span class="header sortable" on:click="{() => setSort("updated")}">
      Updated
      {#if sort === "updated"}
        {#if direction === "asc"}
          ▲
        {:else}
          ▼
        {/if}
      {/if}
    </span>

    <span class="header">
      Status
    </span>

    <span class="header"/>
  </li>

  {#each transcripts as transcript (transcript.id)}
    <Transcript transcript={transcript}/>
  {:else}
    <li>
      <span class="empty">
        {#if allLoaded}
          You have no transcripts
        {:else}
          Loading...
        {/if}
      </span>
    </li>
  {/each}
</ol>

{#if !allLoaded}
  {#if loadingMore}
    <Loading text="Loading"/>
  {:else}
    <button on:click={loadMore}>Load more</button>
  {/if}
{/if}
