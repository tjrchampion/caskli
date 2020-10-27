import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _72d0a5ee = () => interopDefault(import('../pages/account/login.vue' /* webpackChunkName: "pages/account/login" */))
const _3622f7a4 = () => interopDefault(import('../pages/account/register.vue' /* webpackChunkName: "pages/account/register" */))
const _1c4df18e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _677cf83e = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account/login",
    component: _72d0a5ee,
    name: "account-login"
  }, {
    path: "/account/register",
    component: _3622f7a4,
    name: "account-register"
  }, {
    path: "/",
    component: _1c4df18e,
    name: "index"
  }, {
    path: "/:id",
    component: _677cf83e,
    name: "id"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
