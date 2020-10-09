import VueI18n from 'vue-i18n'
import i18n from '../../locales'
import AppManager from '../appManager'

class Translator {
  locale: string
  fallbackLocale: string
  messages: VueI18n.LocaleMessages | null

  constructor () {
    this.locale = i18n.locale
    this.messages = i18n.messages
    if (typeof i18n.fallbackLocale === 'string') {
      this.fallbackLocale = i18n.fallbackLocale
    } else {
      this.fallbackLocale = 'en'
    }
  }

  // 改变翻译器语言
  changeLang (locale: string) {
    this.locale = locale
  }

  // 获取翻译函数（为了保持this正确指向）
  // Get the translation function (to keep this pointed to correctly)
  get () {
    return (i: string) => { return this.$t(i) }
  }

  // 翻译函数
  // Translation function
  $t (original: string) {
    const textList = original.split('.')

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    function $query (trans: any) {
      for (let i = 0; i < textList.length; i++) {
        const key = textList[i]
        if (typeof (trans) === 'object') trans = trans[key]
      }
      return trans || original
    }

    if (this.messages === null) {
      return
    }

    let re = $query(this.messages[this.locale])
    if (re === original) re = $query(this.messages[this.fallbackLocale])
    return re
  }
}

export default Translator
