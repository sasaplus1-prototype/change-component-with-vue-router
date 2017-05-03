import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from './Index.vue';

import A from './A.vue';
import B from './B.vue';
import C from './C.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Index },
  { path: '/A', component: A },
  { path: '/B', component: B },
  { path: '/C', component: C },
];

export default new VueRouter({
  routes,
});
