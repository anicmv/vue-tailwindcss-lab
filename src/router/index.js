import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

export const pages = [
  {
    name: 'MultiColumnWaterfall',
    title: '多列瀑布流',
    path: '/multi-column-waterfall',
    component: () => import('../views/MultiColumnWaterfall.vue'),
  },
  {
    name: 'NavMenuHoverEffect',
    title: '导航菜单悬停动画',
    path: '/nav-menu-hover-effect',
    component: () => import('../views/NavMenuHoverEffect.vue'),
  },
  {
    name: 'TopNavBar',
    title: '顶部导航栏',
    path: '/top-nav-bar',
    component: () => import('../views/TopNavBar.vue'),
  },
  {
    name: 'HoverPreviewAlbumList',
    title: '悬停预览相册列表',
    path: '/hover-preview-album-list',
    component: () => import('../views/HoverPreviewAlbumList.vue'),
  },
  {
    name: 'ExpandingCardsView',
    title: '扩展卡片视图',
    path: '/expanding-cards-view',
    component: () => import('../views/ExpandingCardsView.vue'),
  },
  {
    name: 'RotatingNavAnimation',
    title: '旋转导航动画',
    path: '/rotating-nav-animation',
    component: () => import('../views/RotatingNavAnimation.vue'),
  },
  {
    name: 'ProgressSteps',
    title: '进度步骤条',
    path: '/progress-steps',
    component: () => import('../views/ProgressSteps.vue'),
  },
  {
    name: 'BilibiliBar',
    title: '哔哩哔哩导航栏',
    path: '/bilibili-bar',
    component: () => import('../views/BilibiliBar.vue'),
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
