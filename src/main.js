import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// 页面刷新时，重新赋值token
if (sessionStorage.getItem('cityName')) {
  store.commit('changeCityName', sessionStorage.getItem('cityName'))
}