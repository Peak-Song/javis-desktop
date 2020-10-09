import { ipcMain, dialog } from 'electron'
import AppManager from '../../appManager'

class IpcEvents {
  appManager: AppManager | undefined

  // 创建ipc事件
  create (appManager: AppManager) {
    this.appManager = appManager

    // 翻译器函数
    // Translator function
    const $t = appManager.translator.get()

    // ipc通信示例 / ipc demo
    ipcMain.on('showDialog', (sys, msg) => {
      dialog.showMessageBox({
        type: 'info',
        title: '收到消息！',

        // 在任何能调用翻译器函数的地方都能使用多语言
        // Multi-language support where translator functions are available
        message: $t('receiveFromRenderer'),
        detail: msg
      }).then(r => {})
    })

    // 语言变更事件 / language change event
    ipcMain.on('appLanguageChange', (sys, lang) => {
      if (this.appManager) {
        this.appManager.languageChange(lang)
      }
    })
  }
}

export default new IpcEvents()
