import { RouteRecordRaw} from 'vue-router'
export default Array<RouteRecordRaw>(
    {
        path: '/',
        name: 'Login',
        component: () => import('../view/Login.vue')
    }
)
