import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入过滤器文件
import './utils/filters.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  // 安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this  // $bus就相当于当前应用的vm
  }
}).$mount('#app')
