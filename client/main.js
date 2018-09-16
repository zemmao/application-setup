import App from './App';
import router from './router';
import store from './store';
import Vue from 'vue';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
