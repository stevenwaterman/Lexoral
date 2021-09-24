<script lang="ts">
  import { getDb } from "../db";
  import type { User } from "firebase/auth";
  import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
  import type { DocumentData, QuerySnapshot } from "firebase/firestore";
  import TranscriptEntry from "./ReadyTranscript.svelte";

  export let user: User;

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

  function getTranscripts(order: typeof sort, dir: typeof direction): Promise<QuerySnapshot<DocumentData>> {
    const transcriptCollection = collection(getDb(), "users", user.uid, "transcripts");
    const q = query(transcriptCollection, orderBy(order, dir), limit(10));
    return getDocs(q);
  }  
</script>

<style>
  .table {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 1em;
  }

  .header {
    font-weight: bold;
    cursor: pointer;
    border-bottom: 1px solid black;
  }
</style>

{#await getTranscripts(sort, direction)}
  Fetching transcripts
{:then transcripts}
  <div class="table">
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

    {#each transcripts.docs as transcript}
      <TranscriptEntry transcript={transcript}/>
    {:else}
      <li>
        No transcripts
      </li>
    {/each}
  </div>
{:catch err}
  {err}
{/await}
