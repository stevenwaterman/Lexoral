<script lang="ts">
  import { getDb } from "./db";
  import type { User } from "firebase/auth";
  import { doc, onSnapshot} from "firebase/firestore";

  export let user: User;
  
  let unsub: () => void = () => {};
  let secondsCredit: number | undefined = undefined;

  function watchCredit(user: User) {
    unsub();
    const docRef = doc(getDb(), "users", user.uid);
    unsub = onSnapshot(docRef, snapshot => {
      secondsCredit = snapshot.get("secondsCredit");
    });
  }
  $: watchCredit(user);

  function getCreditString(credit: number | undefined): string {
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
</script>

<style>

</style>

Credit: {getCreditString(secondsCredit)}