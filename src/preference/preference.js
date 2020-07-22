import Vue from 'vue'

import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from '@@/App.vue'
import { i18n } from '@@/lang'

// import ipcService from '@@/plugins/ipcService'

Vue.use(ElementUI)
// Vue.use(ipcService)

Vue.config.productionTip = false

new Vue({
  i18n,
  render: (h) => h(App)
}).$mount('#app')
