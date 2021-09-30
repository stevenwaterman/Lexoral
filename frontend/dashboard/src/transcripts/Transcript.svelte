<script lang="ts">
  import type { DocumentData, QueryDocumentSnapshot, Timestamp } from "firebase/firestore";
  import { getRelativeTime, timeStore } from "../time";

  export let transcript: QueryDocumentSnapshot<DocumentData>;

  let link: string;
  $: link = `/editor?id=${transcript.id}`;

  let name: string;
  $: name = transcript.get("name");

  let duration: number | undefined;
  $: duration = transcript.get("audio.duration");

  let durationStr: string;
  $: durationStr = getDurationString(duration);

  let now: Date;
  $: now = new Date();

  let created: Date | undefined;
  $: created = transcript.get("created")?.toDate();

  let createdTooltip: string | undefined;
  $: createdTooltip = getTimeTooltip(created);

  let updated: Date | undefined;
  $: updated = transcript.get("updated")?.toDate();

  let updatedTooltip: string | undefined;
  $: updatedTooltip = getTimeTooltip(updated);

  let stage: string | undefined;
  $: stage = transcript.get("stage");

  let ready: boolean;
  $: ready = stage === "ready";

  function getDurationString(duration: number | undefined): string {
    if (duration === undefined) return "-";
    if (duration === -1) return "-";

    let seconds = duration;
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    seconds = Math.round(seconds);

    const hourStr = hours.toString();
    const minuteStr = minutes.toString().padStart(2, "0");
    const secondStr = seconds.toString().padStart(2, "0");

    if (hours === 0 && minutes === 0) return `${seconds} seconds`;
    if (hours === 0) return `${minuteStr}:${secondStr}`;
    return `${hourStr}:${minuteStr}:${secondStr}`;
  }

  function getTimeTooltip(time: Date | undefined): string | undefined {
    if (time === undefined) return undefined;
    const year = time.getFullYear();
    const month = time.getMonth().toString().padStart(2, "0");
    const day = time.getDay().toString().padStart(2, "0");
    const hour = time.getHours().toString().padStart(2, "0");
    const minute = time.getMinutes().toString().padStart(2, "0");
    const second = time.getSeconds().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }
</script>

<style>
  li {
    display: contents;
  }

  li:hover span {
    background-color: var(--blue-3)
  }

  span {
    padding-right: 1em;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
  }

  a {
    display: contents;
    text-decoration: inherit;
    color: inherit
  }
</style>

<li>
  <a href={ready ? link : undefined}>
    <span>{name}</span>
    <span>{durationStr}</span>
    <span title={createdTooltip}>{getRelativeTime(created, $timeStore)}</span>
    <span title={updatedTooltip}>{getRelativeTime(updated, $timeStore)}</span>
    {#if ready}
      <span>✓</span>
    {:else}
      <span title={stage}>⧗</span>
    {/if}
  </a>
</li>
