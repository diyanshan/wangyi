import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible.js'
import router from './router'
import store from './store/index.js'
import Split from'./components/Split/Split.vue'
import VueLazyload from 'vue-lazyload'
import loading from './common/img/loading.gif'

//图片懒加载
Vue.use(VueLazyload, {
  loading
})

Vue.config.productionTip = false


//注册为全局组件
Vue.component('Split',Split)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
