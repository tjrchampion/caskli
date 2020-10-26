<template>
  <div></div>
</template>

<script>
export default {
  async asyncData ({ params, error, $axios, redirect, store }) {
    try {
      const  { data }  = await $axios.$get(`/api/${params.id}`);
      let url = data[0].url;

      await $axios.$put(`/api/${params.id}`, JSON.parse(data[0].meta)).then(response => {
        store.dispatch('setUrlCount', data[0]);
      });

      redirect(url);
    } catch (e) {
      error({ message: 'URL not found', statusCode: 404 });
    }
  }
}
</script>c