import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Main from '../views/Main.vue';
import Bus from '../views/Bus.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/bus/:number',
    name: 'Bus',
    component: Bus,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
