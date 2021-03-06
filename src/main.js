// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

import Axios from 'axios'
Vue.prototype.$axios = Axios

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

if (sessionStorage.getItem("vuextotal")) {
  store.commit("vuextotal",sessionStorage.getItem("vuextotal"));
}
if (sessionStorage.getItem("vuexfoods")) {
  store.commit("vuexfoods", sessionStorage.getItem("vuexfoods"));
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
