import type { User } from "firebase/auth";
import { Writable, writable } from "svelte/store";
import type { TranscriptEntry } from "./state/initialiseState";

let user: User | null | undefined = undefined;
export const userStore: Writable<User | null | undefined> = writable(user);
userStore.subscribe(state => user = state);

type FetchTranscriptResult = {
  transcript: Omit<TranscriptEntry, "idx">[];
  audioUrl: string;
}

export function assertUser(): User {
  if (user === undefined) throw new Error("User is undefined when calling authenticated api");
  if (user === null) throw new Error("User is not authenticated when calling authenticated api");
  return user;
}

export function getTranscriptId(): string {
  const params = new URLSearchParams(window.location.search);
  const transcriptId = params.get("id");
  if (transcriptId === null) throw new Error("Missing transcript ID");
  return transcriptId;
}

export async function fetchTranscript(): Promise<FetchTranscriptResult> {
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
