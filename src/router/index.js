import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/catalog-gas-reductors', name: 'catalog-gas-reductors', component: () => import('../views/catalog-gas-reductors.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router