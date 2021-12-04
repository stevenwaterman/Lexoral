import type { User } from "firebase/auth";
import { Writable, writable } from "svelte/store";
import { isDemo } from "./demo";
import type { TranscriptEntry } from "./state/initialiseState";

let user: User | undefined = undefined;
export const userStore: Writable<User | undefined> = writable(user);
userStore.subscribe(state => user = state);

type FetchTranscriptResult = {
  transcript: Omit<TranscriptEntry, "idx">[];
  audioUrl: string;
}

function assertUser(): User {
  if (user === undefined) throw new Error("Authenticated API is called before the auth state has updated");
  return user;
}

export function getUserUid(): string {
  if (isDemo()) return "demo";
  if (user === undefined) throw new Error("Authenticated API is called before the auth state has updated");
  return user.uid;
}

export function getTranscriptId(): string {
  if (isDemo()) return "demo";

  const params = new URLSearchParams(window.location.search);
  const transcriptId = params.get("id");
  if (transcriptId === null) throw new Error("Missing transcript ID");
  return transcriptId;
}

export async function fetchTranscript(): Promise<FetchTranscriptResult> {
  if (isDemo()) return fetchTranscriptDemo();
  else return fetchTranscriptLive();
}

async function fetchTranscriptLive(): Promise<FetchTranscriptResult> {
  return assertUser()
    .getIdToken()
    .then(idToken =>
      fetch(`https://europe-west2-${process.env["PROJECT_ID"]}.cloudfunctions.net/fetch?transcript=${getTranscriptId()}`, {
        method: "get",
        headers: {
          "Authorization": `Bearer ${idToken}`
        }
      }))
    .then(res => {
      if (res.ok) return res;
      throw new Error("response was not OK: " + res.status)
    })
    .then(res => res.json())
}

async function fetchTranscriptDemo(): Promise<FetchTranscriptResult> {
  return fetch("/assets/demo.json")
    .then(res => res.json())
    .then(transcript => ({ transcript, audioUrl: "/assets/demo.mp3" }));
}
