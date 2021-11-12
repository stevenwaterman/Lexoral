<script lang="ts">
  import { browserLocalPersistence, getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { navigate } from "svelte-navigator";

  // TODO handle already logged in user

  let emailComponent: HTMLInputElement;
  let passwordComponent: HTMLInputElement;

  function submit() {
    const email = emailComponent.value;
    const password = passwordComponent.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        if (user.emailVerified) {
          navigate("/dashboard");
        } else {
          navigate("/dashboard/auth/verify")
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

  <input type="submit" value="Log In" />
</form>