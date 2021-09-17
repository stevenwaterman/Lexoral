<script lang="ts">
  // TODO privacy + ToS

  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import type { User } from "firebase/auth";
  
  export let user: User | null;
  $: if (user !== null) {
    // TODO log out the current user
  }

  let emailComponent: HTMLInputElement;
  let passwordComponent: HTMLInputElement;

  function submit() {
    const email = emailComponent.value;
    const password = passwordComponent.value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        if (user.emailVerified) {
          location.pathname = "/"
        } else {
          location.pathname = "/auth/verify"
        }
      })
      .catch(err => {
        if (err.code === "auth/user-not-found") {
          console.error("Unrecognised email");
        } else if (err.code === "auth/invalid-email") {
          console.error("Invalid Email")
        }
        console.log(err);
        console.log(err.code);
        console.log(err.customData);
        console.log(err.name);
      })
  }
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<form on:submit|preventDefault={submit}>
  <div class="formElement">
    <label for="email">Email Address</label>
    <input id="email" type="text" bind:this={emailComponent} />
  </div>

  <div class="formElement">
    <label for="password">Password</label>
    <input id="password" type="password" bind:this={passwordComponent} />
  </div>

  <input type="submit" />
</form>