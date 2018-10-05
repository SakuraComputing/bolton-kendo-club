import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/whatskendo',
      name: 'whatskendo',
      component: () => import(/* webpackChunkName: "about" */ './views/WhatsKendo.vue')
    },
    {
      path: '/links',
      name: 'links',
      component: () => import('./views/KendoLinks.vue')
    },
    {
      path: '/study',
      name: 'study',
      component: () => import('./views/KendoStudy.vue')
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('./views/KendoVideo.vue')
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('./views/KendoPhoto.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('./views/ClubHistory.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('./views/Calendar.vue')
    }
  ]
})
