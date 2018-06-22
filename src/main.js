// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/common.css'

Vue.config.productionTip = false

//定义全局价格过滤器，保留两位小数
Vue.filter('priceType', function (value) {
  if(!isNaN(value)){
  	value = value.toFixed(2);
  	return value;
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
