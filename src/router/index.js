import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/devices',
        name: 'devices',
        component: () => import('../views/Devices.vue'),
    },
    {
        path: '/animations',
        name: 'animations',
        component: () => import('../views/Animations.vue'),
    },
    {
        path: '/device/:id',
        name: 'device',
        component: () => import('../views/Device.vue'),
    },
]

const router = new VueRouter({
    routes,
})

export default router
