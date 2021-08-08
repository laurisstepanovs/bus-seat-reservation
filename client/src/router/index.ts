import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Main from '../views/Main.vue';
import Bus from '../views/Bus.vue';
import Bus1 from '../views/Bus1.vue';
import Bus2 from '../views/Bus2.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/bus/1',
    name: 'Bus',
    meta: { busNumber:1 },
    component: Bus,
  },
  {
    path: '/bus/2',
    name: 'Bus2',
    meta: { busNumber:2 },
    component: Bus1,
  },
  {
    path: '/bus/3',
    name: 'Bus3',
    meta: { busNumber:3 },
    component: Bus2,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
