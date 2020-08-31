import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'

const Date = {
  namespaced: true,
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          date: 'date/getDate',
        })
      }
    })
  }
}

Vue.use(Date)
