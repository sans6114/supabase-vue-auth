import { createRouter, createWebHistory } from 'vue-router'

import LayoutPage from '@/layouts/LayoutPage.vue'
import HomeViews from '@/views/HomeViews.vue'
import RegisterSupa from '@/views/RegisterSupa.vue'

import AuthView from '../views/AuthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutPage,
      redirect: { name: 'home' },
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeViews
        },
        {
          path: 'login',
          name: 'login',
          component: AuthView
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterSupa
        }
      ]
    }
  ]
})

export default router
