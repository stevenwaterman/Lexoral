import { readable, Readable } from "svelte/store";

export const timeStore: Readable<Date> = readable(new Date(), set => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000)

  return () => clearInterval(interval);
});

export function getRelativeTime(time: Date | undefined, now: Date): string {
  if (time === undefined) return "-";
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