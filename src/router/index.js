import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView'
import NotFound from '../views/NotFound'
import RegisterView from '../views/RegisterView'
import UserList from '../views/UserList'
import UserProfile from '../views/UserProfile'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfile
  },
  {
    path: '/userlist ',
    name: 'userlist',
    component: UserList
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
