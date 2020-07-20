// 国际化的相关配置
import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enLocale from './en'
import zhLocale from './zh'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui english
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui chinese

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  messages: {
    en: {
      ...enLocale,
      ...elementEnLocale
    },
    zh: {
      ...zhLocale,
      ...elementZhLocale
    }
  }
})

export { i18n }
