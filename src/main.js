import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
var aa =
  'gjgjsdfghjkertyuiodfgqwertyuiopgjgjsdfghjkertyuiodfgqwertyuiopgjgjsdfghjkertyuiodfgqwertyuiopgjgjsdfghjkertyuiodfgqwertyuiopgjgjsdfghjkertyuiodfgqwertyuiopgjgjsdfghjkertyuiodfgqwertyuiopgjgjsdfghjkertyuiodfgqwertyuiop';
var bb = [1, 2, 3];
debugger;
console.log(aa, bb);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
