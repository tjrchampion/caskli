import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'

const Date = {
  namespaced: true,
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          appUrl: 'getAppUrl',
          urls: 'getUrls',
          page: 'getPage',
          pageCount: 'getPageCount',
          short: 'getShort',
          banned: 'getBanned',
          loader: 'loader',
          pattern: 'getUrlPattern',
          submitDisabled: 'getSubmitDisabled'
        })
      }
    })
  }
}

Vue.use(Date)
