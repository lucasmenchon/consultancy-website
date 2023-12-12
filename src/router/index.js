import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppView from '../views/AppView.vue'
import DocsView from '../views/DocsView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'sobre',
    component: AppView
  },
  {
    path: '/services',
    name: 'serviços',
    component: DocsView
  },
  {
    path: '/contact',
    name: 'contato',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
