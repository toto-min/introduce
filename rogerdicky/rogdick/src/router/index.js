import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/components/Main.vue')
  },
  {
      path:'/signin',
      name:'SignIn',
      component: () => import('@/components/SignIn.vue')
  },
  {
      path:'/write',
      name:'Write',
      component:() => import('@/components/Write/Write.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router