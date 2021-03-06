import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/captureFabric',
    name: 'captureFabric',
    component: () => import('../test/CaptureFabric.vue')
  },
  {
    path: '/captureFabricTest',
    name: 'captureFabricTest',
    component: () => import('../test/CaptureFabricTest.vue')
  },
  {
    path: '/facingMode',
    name: 'facingMode',
    component: () => import('../test/FacingMode.vue')
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import('../test/LandingPage.vue')
  }, 
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../test/EditPage.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
