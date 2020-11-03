import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_toast_68280418 from 'nuxt_plugin_toast_68280418' // Source: ./toast.js (mode: 'client')
import nuxt_plugin_axios_00889d76 from 'nuxt_plugin_axios_00889d76' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_workbox_fd362dbe from 'nuxt_plugin_workbox_fd362dbe' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_meta_3ea301f9 from 'nuxt_plugin_meta_3ea301f9' // Source: ./pwa/meta.js (mode: 'all')
import nuxt_plugin_icons_f68cf554 from 'nuxt_plugin_icons_f68cf554' // Source: ./pwa/icons.js (mode: 'all')
import nuxt_plugin_bus_74525326 from 'nuxt_plugin_bus_74525326' // Source: ../plugins/bus.js (mode: 'all')
import nuxt_plugin_feather_6a7f4a6a from 'nuxt_plugin_feather_6a7f4a6a' // Source: ../plugins/feather.js (mode: 'all')
import nuxt_plugin_api_785206da from 'nuxt_plugin_api_785206da' // Source: ../plugins/api.js (mode: 'all')
import nuxt_plugin_sweet_333bab06 from 'nuxt_plugin_sweet_333bab06' // Source: ../plugins/sweet.js (mode: 'all')
import nuxt_plugin_urls_868b4ae8 from 'nuxt_plugin_urls_868b4ae8' // Source: ../plugins/mixins/urls.js (mode: 'all')
import nuxt_plugin_auth_bf700170 from 'nuxt_plugin_auth_bf700170' // Source: ../plugins/mixins/auth.js (mode: 'all')
import nuxt_plugin_plugin_34c7f6c1 from 'nuxt_plugin_plugin_34c7f6c1' // Source: ./auth/plugin.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Caskli - Brew short URLs","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"msapplication-TileColor","content":"#ffffff"},{"name":"theme-color","content":"#614BE6"},{"name":"apple-mobile-web-app-status-bar-style","content":"default"},{"name":"description","content":"Brew URLs with Csk.li - Another URL shortner. "},{"hid":"Caskli - Brew URLs","name":"Caskli - Brew URLs","content":"Caskli - Another URL shortner"}],"link":[{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Roboto+Mono:wght@400;500&display=swap"},{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico?v2"},{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Fapple-touch-icon.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ffavicon-16x16.png"},{"rel":"manifest","href":"\u002Fsite.webmanifest"},{"rel":"mask-icon","href":"\u002Fsafari-pinned-tab.svg","color":"#c5442b"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_toast_68280418 === 'function') {
    await nuxt_plugin_toast_68280418(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_00889d76 === 'function') {
    await nuxt_plugin_axios_00889d76(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_fd362dbe === 'function') {
    await nuxt_plugin_workbox_fd362dbe(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_3ea301f9 === 'function') {
    await nuxt_plugin_meta_3ea301f9(app.context, inject)
  }

  if (typeof nuxt_plugin_icons_f68cf554 === 'function') {
    await nuxt_plugin_icons_f68cf554(app.context, inject)
  }

  if (typeof nuxt_plugin_bus_74525326 === 'function') {
    await nuxt_plugin_bus_74525326(app.context, inject)
  }

  if (typeof nuxt_plugin_feather_6a7f4a6a === 'function') {
    await nuxt_plugin_feather_6a7f4a6a(app.context, inject)
  }

  if (typeof nuxt_plugin_api_785206da === 'function') {
    await nuxt_plugin_api_785206da(app.context, inject)
  }

  if (typeof nuxt_plugin_sweet_333bab06 === 'function') {
    await nuxt_plugin_sweet_333bab06(app.context, inject)
  }

  if (typeof nuxt_plugin_urls_868b4ae8 === 'function') {
    await nuxt_plugin_urls_868b4ae8(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_bf700170 === 'function') {
    await nuxt_plugin_auth_bf700170(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_34c7f6c1 === 'function') {
    await nuxt_plugin_plugin_34c7f6c1(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
