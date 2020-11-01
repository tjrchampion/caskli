import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'

const Auth = {
  namespaced: true,
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          isAuthenticated: 'isAuthenticated',
          loggedInUser: 'loggedInUser'
        })
      }
    })
  }
}

Vue.use(Auth)
