<template>
  <div></div>
</template>

<script>
export default {
  async asyncData ({ params, error, $axios, redirect }) {
    try {
      const  { data }  = await $axios.$get(`/api/${params.id}`);
      let url = data[0].url;
      redirect(url);
    } catch (e) {
      error({ message: 'URL not found', statusCode: 404 });
    }
  }
}
</script>