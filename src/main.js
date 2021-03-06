// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VCharts from 'v-charts'

import "./common/css/normalize.css"
import "./common/css/main.css";
import "./common/css/color-dark.css";
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.use(VCharts);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // render: h => h(app)
});
