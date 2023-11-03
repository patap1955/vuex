import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import Home from "@/pages/Home"
import About from "@/pages/About"

const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/:CatchAll(.*)',
            name: '404',
            component: <h1 class="title">404 Not Found</h1>
        }
    ]
})

export default routers