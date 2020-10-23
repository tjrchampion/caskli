import axios from 'axios';

export const state = () => ({
  appUrl: process.env.APP_URL,
  urls: [],
  banned: [],
  short: [
    'bit.ly',
    'goo.gl',
    'tinyurl.com',
    'ow.ly',
    'su.pr',
    'is.gd',
    'cli.gs',
    'tiny.cc',
    'sn.im',
    'moourl.com',
    'l.gg',
    'catchylink.com',
    'short.nr',
    'para.pt',
    'twurl.nl',
    'snipurl.com',
    'budurl.com',
    'xrl.us',
  ]
});

export const mutations = {
  SET_URL(state, url) {
    state.urls.unshift(url);
  },
  SET_URLS(state, urls) {
    state.urls = urls;
  },
  CLEAR_LOADER(state) {
    state.urls.shift();
  },
  SET_BANNED(state, banned) {
    state.banned = banned;
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {

    return this.$axios.get('/api').then((response) => {
      commit('SET_URLS', response.data);
      return this.$axios.get('https://raw.githubusercontent.com/bryput/porn-site-list/master/sites.json').then((response) => {
        commit('SET_BANNED', response.data);
      });
    }).catch((error) => {
      console.warn('probably an issue connecting to the API');
      console.warn(error);
    });
  },
  setUrl({ commit }, url) {
    commit('SET_URL', url);
  },
  setUrls({ commit }, urls) {
    commit('SET_URLS', urls);
  },
  clearLoader({commit}) {
    commit('CLEAR_LOADER');
  },
  setBanned({ commit }, banned) {
    commit('SET_BANNED', banned);
  }
}

export const getters = {
  getAppUrl(state) {
    return state.appUrl;
  },
  getUrls(state) {
    return state.urls
  },
  getShort(state) {
    return state.short;
  },
  getBanned(state) {
    return state.banned;
  },
  getUrlPattern() {
    return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i
  },
  loader() {
    return {
      slug: "",
      meta: JSON.stringify({file: "", colour: ""}),
      created_at: "",
      url: "",
      isLoading: true
    }
  }
}