<template>
  <div class="user-notify" :class="{danger: isError, success: !isError}">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['message', 'isError']
}
</script>