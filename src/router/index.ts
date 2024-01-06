import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import InedxView from '../components/index.vue'
import ShopView from '../components/shop.vue'
import LoginView from '../components/login.vue'
import AdminView from '../components/admin.vue'
import AdminListView from '../components/adminList.vue'
import UserListView from '../components/userList.vue'
import EchartsView from '../components/echarts.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: InedxView
  },
  {
    path: '/index',
    component: InedxView
  },
  {
    path: '/shop',
    component: ShopView
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/admin',
    component: AdminView,
    children: [
      {
        path: '/adminList',
        component: AdminListView,
      },
      {
        path: '/userList',
        component: UserListView,
      },
      {
        path: '/echarts',
        component: EchartsView,
      }
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
