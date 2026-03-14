import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

export const pages = [
  {
    name: 'MultiColumnWaterfall',
    title: '多列瀑布流',
    path: '/multi-column-waterfall',
    component: () => import('../views/MultiColumnWaterfall.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    ...pages.map(({ name, path, component }) => ({
      path,
      name,
      component,
    })),
  ],
})

export default router
