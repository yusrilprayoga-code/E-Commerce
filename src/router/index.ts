import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsVue from '@/views/Products.vue'
import DetailViewVue from '@/views/DetailView.vue'
import DetailView2Vue from '@/views/DetailView2.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsVue
  },
  {
    path: '/products/DetailView/:productId',
    name: 'DetailView',
    component: DetailViewVue,
    props: true,
  },
  {
    path: '/products/DetailViews/:featureId',
    name: 'DetailView2',
    component: DetailView2Vue ,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
