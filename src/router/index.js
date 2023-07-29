import { createRouter, createWebHistory } from "vue-router"

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, 
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }, 
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }, 
    {
      path: '/:patchMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router