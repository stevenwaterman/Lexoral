import { doc, onSnapshot } from "firebase/firestore";
import { writable, Readable, Writable } from "svelte/store"
import { userStore } from "../auth/user";
import { getDb } from "../db";

const internalCreditStore: Writable<number | undefined> = writable(undefined);
export const creditStore: Readable<number | undefined> = { subscribe: internalCreditStore.subscribe }

let unsub: () => void = () => {};
userStore.subscribe(user => {
  unsub();
  if (user === null) {
    unsub = () => {};
    return;
  }
  
  const docRef = doc(getDb(), "users", user.uid);
  unsub = onSnapshot(docRef, snapshot => {
    const credit = snapshot.get("secondsCredit");
    console.log(credit);
    internalCreditStore.set(credit);
  });
})

export function toCreditString(credit: number | undefined): string {
  if (credit === undefined) return "Loading";
  if (credit < 0) return "Overdrawn";
  if (credit === 0) return "None";

  const hours = Math.floor(credit / 3600);
  const minutes = Math.floor((credit - hours * 60) / 60);
  const seconds = credit % 60;

  const hourString = hours.toString().padStart(2, "0");
  const minuteString = minutes.toString().padStart(2, "0");
  const secondString = seconds.toString().padStart(2, "0");

  return `${hourString}:${minuteString}:${secondString}`;
}
