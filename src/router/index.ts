import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import LoginRouter from '../pages/login/router'

const routes: Array<RouteRecordRaw> = [
    ...LoginRouter
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})
  
export default router