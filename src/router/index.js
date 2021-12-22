import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import ListAddress from '../views/ListAddress.vue'
import ListUsers from '../views/ListUsers.vue'
import CreateAddress from '../views/CreateAddress.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({ name: 'Signin'})
      }
      next()
    }
  },
  {
    path: '/list-users',
    name: 'ListUsers',
    component: ListUsers,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({ name: 'Signin'})
      }
      next()
    }
  },
  {
    path: '/addresses',
    name: 'ListAddress',
    component: ListAddress,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({ name: 'Signin'})
      }
      next()
    }
  },
  {
    path: '/create-address',
    name: 'CreateAddress',
    component: CreateAddress,
    beforeEnter: (to, from, next) => {
      if(!store.getters['auth/authenticated']){
        return next({ name: 'Signin'})
      }
      next()
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
