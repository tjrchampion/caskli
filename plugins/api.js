export default (context, inject) => {
  inject('api', api)
  context.$api = api
}

const api = {
  async getDate () {
    return fetch('/api/date');
  }
};
