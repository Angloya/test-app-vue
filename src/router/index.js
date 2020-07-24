import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LeftSideContent',
    component: () => import('../views/LeftSideContent.vue')
  },
  {
    path: '/person/:personId',
    name: 'PersonView',
    component: () => import('../views/PersonView.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router