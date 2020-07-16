import Vue from 'vue'

import 'normalize.css'
import ElementUI from 'element-ui'
import SvgIcon from 'vue-svgicon'
import MDEditor from 'mavon-editor'

import 'mavon-editor/dist/css/index.css'
import '@/styles/element-variables.scss'
import '@/styles/index.scss'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import { i18n } from '@/lang'
import '@/icons/components'

import ipcService from '@/plugins/ipcService'

Vue.use(ElementUI)
Vue.use(MDEditor)
Vue.use(ipcService)

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
