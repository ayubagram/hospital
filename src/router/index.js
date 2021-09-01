import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/gallery', name: 'Gallery', component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery.vue') },
  { path: '/services', name: 'Services', component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue') },
  { path: '/doctors', name: 'Doctors', component: () => import(/* webpackChunkName: "doctors" */ '../views/Doctors.vue') },
]

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
