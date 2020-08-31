<template>
  <div>
    <button @click="fetchDate">Get Date</button>
    <div class="result" v-if="date">{{date}}</div>
  </div>
</template>

<script>
export default {
  methods: {
    async fetchDate() {
      const res = await this.$api.getDate();
      this.$store.dispatch('date/setDate', (await res.json()).date);
    }
  }
};
</script>
