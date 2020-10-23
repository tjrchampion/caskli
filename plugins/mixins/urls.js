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
          short: 'getShort',
          banned: 'getBanned',
          loader: 'loader',
          pattern: 'getUrlPattern'
        })
      }
    })
  }
}

Vue.use(Date)