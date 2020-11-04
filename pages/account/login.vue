<template>
  <div class="container">

    <form id="login" @submit.prevent="login">

      <!-- <notify v-if="error.error" :message="error.message" :isError="error.error" /> -->

      <fieldset>
        <legend>
          <a href="/" aria-label="Return Home"><img src="/csk.svg" width="100%" height="100%" alt="csk.li"></a>
        </legend> 
        <div class="field-group">
          <label for="email">Email</label>
          <input v-model="form.email" id="email" type="email" placeholder="Email address">
        </div>
        <div class="field-group">
          <label for="password">Password</label>
          <input v-model="form.password" id="password" autocomplete="current-password" type="password" placeholder="Password">
        </div>
        <button type="submit" aria-label="Login">Login</button>

        <a href="/account/register" style="padding: 1rem;" aria-label="Go to Register">Don't have an account? Register now.</a>

      </fieldset>


    </form>

  </div>
</template>

<script>

  import Notify from '../../components/Notify';

  export default {
    middleware: 'guest',
    name: 'login',
    layout: 'primary',
    components: {
      Notify
    },
    data() {
      return {
        form: {
          email: '',
          password: '',
        }
      }
    },
    methods: {

      async login() {
        try {

          await this.$auth.loginWith('local', {data: this.form})

          this.$toasted.success('Logged In, welcome.', {
            theme: "outline", 
            position: "bottom-center", 
            duration : 5000
          });

        } catch (err) {
          console.log(err)
        }
      }

    }
  }
</script>