import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import HomeCustomerView from '@/views/HomeCustomerView.vue'
import HomeProviderView from '@/views/HomeProviderView.vue'
import MyOffersView from '@/views/MyOffersView.vue'
import MyOrdersView from '@/views/MyOrdersView.vue'
import OrdersView from '@/views/OrdersView.vue'
import OrderView from '@/views/OrderView.vue'
import ProfileView from '@/views/ProfileView.vue'

const routes = [
  {
      path: '/',
      component: MainView,
  },
  {
      path: '/home_customer',
      component: HomeCustomerView
  },
  {
    path: '/home_provider',
    component: HomeProviderView
  },
  {
      path: '/profile',
      component: ProfileView
  },
  {
      path: '/offers',
      component: MyOffersView
  },
  {
      path: '/orders',
      component: OrdersView
  },
  {
      path: '/order/:id',
      component: OrderView
  },
  {
      path: '/my_orders',
      component: MyOrdersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
