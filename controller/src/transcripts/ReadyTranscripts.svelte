<script lang="ts">
  import { getDb } from "../db";
  import { collection, getDocs, limit, onSnapshot, orderBy, query, QueryDocumentSnapshot, where } from "firebase/firestore";
  import type { DocumentData, QuerySnapshot } from "firebase/firestore";
  import TranscriptEntry from "./ReadyTranscript.svelte";
  import { userStore } from "../auth/user";
  import type { User } from "firebase/auth";

  let sort: "name" | "duration" | "created" | "updated" = "updated";
  let direction: "asc" | "desc" = "desc";

  function setSort(newSort: typeof sort) {
    if (sort === newSort) {
      if (direction === "asc") direction = "desc"
      else direction = "asc";
    } else {
      sort = newSort;
      if (sort === "name") direction = "asc";
      else if (sort === "duration") direction = "asc";
      else if (sort === "created") direction = "desc";
      else if (sort === "updated") direction = "desc";
    }
  }

  function updateQuery(user: User, order: typeof sort, dir: typeof direction) {
    const transcriptCollection = collection(getDb(), "users", user.uid, "transcripts");
    const q = query(transcriptCollection, orderBy(order, dir), limit(10));

    unsub();
    unsub = onSnapshot(q, snapshot => {
      docs = snapshot.docs;
    })
  }

  let unsub: () => void = () => {};
  let docs: QueryDocumentSnapshot<DocumentData>[] = [];

  let user: User | null;
  $: user = $userStore;

  $: if (user) updateQuery(user, sort, direction);
</script>

<style>
  .table {
    margin: 2em;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 0.5em;
  }

  .header {
    font-weight: bold;
    cursor: pointer;
    border-bottom: 1px solid black;
    user-select: none;
  }

  .header:hover {
    background-color: var(--blue-3);
  }

  .empty {
    grid-column: span 5;
  }
  
  li {
    display: contents;
  }
</style>


<ol class="table">
  <li>
    <span class="header" on:click="{() => setSort("name")}">
      Name
      {#if sort === "name"}
        {#if direction === "asc"}
          ▲
        {:else}
          ▼
        {/if}
      {/if}
    </span>

    <span class="header" on:click="{() => setSort("duration")}">
      Length
      {#if sort === "duration"}
        {#if direction === "asc"}
          ▲
        {:else}
          ▼
        {/if}
      {/if}
    </span>

    <span class="header" on:click="{() => setSort("created")}">
      Created
      {#if sort === "created"}
        {#if direction === "asc"}
          ▲
        {:else}
          ▼
        {/if}
      {/if}
    </span>

    <span class="header" on:click="{() => setSort("updated")}">
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
      Ready
    </span>
  </li>

  {#each docs as transcript}
    <TranscriptEntry transcript={transcript}/>
  {:else}
    <li>
      <span class="empty">
        No transcripts
      </span>
    </li>
  {/each}
</ol>
