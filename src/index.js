import Vue from 'vue';

import route from './route';

import App from './App.vue';

new Vue({
  el: '#app',
  router: route,
  render(createElement) {
    return createElement(App);
  },
});
