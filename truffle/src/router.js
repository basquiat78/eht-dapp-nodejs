import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BassMarket from './views/Bassmarket.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bassmarket',
      name: 'BassMarket',
      component: BassMarket
    }
  ]
})
