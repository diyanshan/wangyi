//监听window窗口大小的变化，从而动态改变html根节点的font-size的大小。
// 达到适配不同设备的效果
window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  const htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = htmlWidth / 10 + 'px';
};
setHtmlFontSize();

import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
