import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import room from '../views/room.vue'
import account from '../views/account.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/room',
      name: 'room',
      component: room
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
  ]
})

export default router
