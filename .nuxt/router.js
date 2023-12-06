import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f531992 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _e26a359e = () => interopDefault(import('../pages/myself.vue' /* webpackChunkName: "pages/myself" */))
const _21f8e173 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _3473e2a9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _4f531992,
    name: "contact"
  }, {
    path: "/myself",
    component: _e26a359e,
    name: "myself"
  }, {
    path: "/projects",
    component: _21f8e173,
    name: "projects"
  }, {
    path: "/",
    component: _3473e2a9,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
