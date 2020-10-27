<template>
  <div class="container">

    <form id="login">

      <fieldset>
        <legend>
          <img src="~/assets/images/gt.svg" alt="geektu.be">
        </legend> 
        <div class="field-group">
          <input type="text" placeholder="Email address">
        </div>
        <div class="field-group">
          <input type="text" placeholder="Password">
        </div>
        <button type="submit">Login</button>

        <a href="/account/register" style="padding: 1rem;">Don't have an account? Register now.</a>

      </fieldset>


    </form>

  </div>
</template>

<script>
export default {
  name: 'login',
  layout: 'primary'
}
</script>