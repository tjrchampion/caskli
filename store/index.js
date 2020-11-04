import axios from 'axios';
import banned from '../static/banned.json';

export const state = () => ({
  loggedIn: false,
  user: {},
  appUrl: process.env.APP_URL,
  submitDisabled: false,
  urls: [],
  page: 1,
  pageCount: null,
  banned: [],
  short: [
    'bit.ly',
    'goo.gl',
    'tinyurl.com',
    'shorturl.at',
    'free-url-shortener.rb.gy',
    'rebrandly.com',
    'ow.ly',
    'su.pr',
    'is.gd',
    'cli.gs',
    'tiny.cc',
    'sn.im',
    'moourl.com',
    'l.gg',
    'catchylink.com',
    'branch.io',
    'yourls.org',
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
  SET_SUBMIT_DISABLED(state, bool) {
    state.submitDisabled = bool;
  },
  SET_PAGE(state, page) {
    state.page = page;
  },
  SET_PAGE_COUNT(state, count) {
    state.pageCount = count;
  },
  SET_URLS(state, urls) {
    state.urls.push.apply(state.urls, urls);
  },
  CLEAR_LOADER(state) {
    state.urls.shift();
  },
  SET_BANNED(state, banned) {
    state.banned = banned;
  },
  CLEAR_INDEX(state, id) {
    let filtered = state.urls.filter(u => u.id !== id);
    state.urls = filtered;
  },
  SET_URL_COUNT(state, data) {
    return state.urls.find(url => {
      if(url.id === data.id) {
        let meta = JSON.parse(url.meta);
        meta.clicks += 1;
        url.meta = JSON.stringify(meta);
      }
    });

  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    commit('SET_BANNED', banned);
  },
  setUrl({ commit }, url) {
    commit('SET_URL', url);
  },
  setUrls({ commit }, urls) {
    commit('SET_URLS', urls);
  },
  setPage({ commit }, page) {
    commit('SET_PAGE', page);
  },
  setPageCount({ commit }, count) {
    commit('SET_PAGE_COUNT', count);
  },
  clearLoader({commit}) {
    commit('CLEAR_LOADER');
  },
  setBanned({ commit }, banned) {
    commit('SET_BANNED', banned);
  },
  setUrlCount({ commit }, data) {
    commit('SET_URL_COUNT', data);
  },
  setSubmitDisabled({ commit }, bool) {
    commit('SET_SUBMIT_DISABLED', bool);
  },
  clearIndex({ commit }, id) {
    commit('CLEAR_INDEX', id);
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },

  getAppUrl(state) {
    return state.appUrl;
  },
  getUrls(state) {
    return state.urls
  },
  getShort(state) {
    return state.short;
  },
  getPage(state) {
    return state.page;
  },
  getPageCount(state) {
    return state.pageCount;
  },
  getBanned(state) {
    return state.banned;
  },
  getUrlPattern() {
    return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i
  },
  getSubmitDisabled(state) {
    return state.submitDisabled;
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