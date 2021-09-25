<script lang="ts">
  import type { DocumentData, QueryDocumentSnapshot, Timestamp } from "firebase/firestore";

  export let transcript: QueryDocumentSnapshot<DocumentData>;

  let link: string;
  $: link = `/editor?id=${transcript.id}`;

  let name: string;
  $: name = transcript.get("name");

  let duration: number | undefined;
  $: duration = transcript.get("duration");

  let durationStr: string;
  $: durationStr = getDurationString(duration);

  let now: Date;
  $: now = new Date();

  let created: Date | undefined;
  $: created = transcript.get("created")?.toDate();

  let createdString: string;
  $: createdString = getTimeString(created, now);

  let createdTooltip: string | undefined;
  $: createdTooltip = getTimeTooltip(created);

  let updated: Date | undefined;
  $: updated = transcript.get("updated")?.toDate();

  let updatedString: string;
  $: updatedString = getTimeString(updated, now);

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

  function getTimeString(time: Date | undefined, now: Date): string {
    if (time === undefined) return "";
    const epochThen = time.valueOf() / 1000;
    const epochNow = now.valueOf() / 1000;
    const seconds = Math.floor(epochNow - epochThen);

    const minuteSecs = 60;
    const hourSecs = minuteSecs * 60;
    const daySecs = hourSecs * 24;
    const weekSecs = daySecs * 7;

    if (seconds < 1) return "now";
    if (seconds === 1) return "a second ago";
    if (seconds < minuteSecs) return `${seconds} seconds ago`;
    if (seconds < minuteSecs * 2) return "a minute ago";
    if (seconds < hourSecs) return `${Math.floor(seconds / minuteSecs)} minutes ago`;
    if (seconds < hourSecs * 2) return "an hour ago";
    if (seconds < daySecs) return `${Math.floor(seconds / hourSecs)} hours ago`;
    if (seconds < daySecs * 2) return "yesterday";
    if (seconds < weekSecs) return `${Math.floor(seconds / daySecs)} days ago`;
    
    let yearsDifference = now.getFullYear() - time.getFullYear();
    if (
      now.getMonth() < time.getMonth() ||
      (now.getMonth() === time.getMonth() && now.getDate() < time.getDate())
    ) yearsDifference--;
    if (yearsDifference === 1) return "a year ago";
    if (yearsDifference > 1) return `${yearsDifference} years ago`;

    let monthsDifference = now.getMonth() - time.getMonth();
    if (now.getDate() < time.getDate()) monthsDifference--;
    if (monthsDifference === 1) return "a month ago";
    if (monthsDifference > 1) return `${monthsDifference} months ago`;

    if (seconds < weekSecs * 2) return "a week ago";
    return `${Math.floor(seconds / weekSecs)} weeks ago`;
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

  .clickable {
    cursor: pointer;
  }

  a {
    display: contents;
    text-decoration: inherit;
    color: inherit
  }
</style>

<li class:clickable={ready}>
  <a href={link}>
    <span>{name}</span>
    <span>{durationStr}</span>
    <span title={createdTooltip}>{createdString}</span>
    <span title={updatedTooltip}>{updatedString}</span>
    {#if ready}
      <span>✓</span>
    {:else}
      <span title={stage}>⧗</span>
    {/if}
  </a>
</li>
