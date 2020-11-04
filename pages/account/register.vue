<template>
  <div class="container">

    <form id="login" @submit.prevent="submit">

      <fieldset>
        <legend>
           <a href="/" aria-label="Return Home"><img src="/csk.svg" width="100%" height="100%" alt="csk.li"></a>
        </legend> 

        <div class="field-group">
          <label for="fullname">Full Name</label>
          <input v-model="form.fullname" type="text" id="fullname" placeholder="Full name">
        </div>
        
        <div class="field-group">
          <label for="email">Email</label>
          <input v-model="form.email" type="text" id="email" placeholder="Email address">
        </div>
        <div class="field-group">
          <label for="password">Password</label>
          <input v-model="form.password" type="password" id="password" placeholder="Password">
        </div>
        <button type="submit" aria-label="Register"><key-icon size="1x" /> Register</button>

        <a href="/account/login" style="padding: 1rem;" aria-label="Login">Already have an account? Login now.</a>

      </fieldset>


    </form>

  </div>
</template>


<script>
export default {
  middleware: 'guest',
  name: 'Register',
  layout: 'primary',
  data() {
    return {
      form: {
        email: '',
        fullname: '',
        password: ''
      }
    }
  },
  methods: {

    async submit() {
      try {
        let response = await this.$axios.post('/api/account/register', this.form);
        this.$toasted.success(response.data.message, {
          theme: "outline", 
          position: "bottom-center", 
          duration : 5000
        });

        this.$router.push({path: '/account/login'});
        
      } catch (err) {
        this.$toasted.error(err.response.data.errors, {
          theme: "outline", 
          position: "bottom-center", 
          duration : 5000
        });
      }
    }

  }
}
</script>