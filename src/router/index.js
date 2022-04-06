import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import('../views/PageAccueil.vue'),
  },
  {
    path: '/infos',
    name: 'About',
    component: () => import('../views/PageInformations.vue'),
  },
  {
    path: '/contact',
    name: 'About',
    component: () => import('../views/PageContact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
