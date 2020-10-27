<template>
  <div class="container">

    <form id="login">

      <fieldset>
        <legend>
          <img src="~/assets/images/gt.svg" alt="geektu.be">
        </legend> 

        <div class="field-group">
          <input type="text" id="fullname" placeholder="Full name">
        </div>
        
        <div class="field-group">
          <input type="text" placeholder="Email address">
        </div>
        <div class="field-group">
          <input type="text" placeholder="Password">
        </div>
        <div class="field-group">
          <input type="text" placeholder="Confirm password">
        </div>
        <button type="submit"><key-icon size="1x" /> Register</button>

        <a href="/account/login" style="padding: 1rem;">Already have an account? Login now.</a>

      </fieldset>


    </form>

  </div>
</template>


<script>
export default {
  name: 'Register',
  layout: 'primary'
}
</script>