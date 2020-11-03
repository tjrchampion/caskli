<template>
  <div id="gtprimary" :class="{bgbrand: ($route.name === 'account-login' || $route.name === 'account-register')}">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'primary'
}
</script>