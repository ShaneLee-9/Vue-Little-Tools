import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/shorturl'
    },
    {
        path: '/shorturl',
        name: 'ShortURL',
        component: () => import('../views/ShortURL.vue')
    },
    {
        path: '/qq',
        name: 'QQ',
        component: () => import('../views/QQ.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
