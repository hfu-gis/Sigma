import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Order from '../views/Order'
import Overview from '../views/Overview'
import App from '../App'
import Registration from '../views/Registration'
import Rating from "../views/Rating";
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Root',
            component: App
        },
        {
            path: '/overview',
            name: 'Overview',
            component: Overview
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },

        {
            path: '/Rating',
            name: 'Rating',
            component: Rating
        },
        {path: '/Registration',
        name: 'Registration',
        component: Registration
        },
    ]
})
