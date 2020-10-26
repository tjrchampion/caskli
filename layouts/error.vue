<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Brew not found...</h1>
    <h1 v-else>An error occurred</h1>
    <p>Developer: {{error.message}}</p>
    <nuxt-link to="/">Go home</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['error']  
  }
</script>
