import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home.vue'
import About from '../components/pages/About.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/about',
            component: About,
            name: 'about'
        }
    ]
})