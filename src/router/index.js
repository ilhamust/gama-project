import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../pages/Landing.vue'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import ProdukAsuransi from '../pages/ProdukAsuransi.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/produk-asuransi', component: ProdukAsuransi }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
