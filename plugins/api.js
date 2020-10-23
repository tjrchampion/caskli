export default (context, inject) => {
  inject('api', api)
  context.$api = api
}

const api = {
  async getDate () {
    const res = await fetch('/api/create');
    return await res.json();
  }
};
