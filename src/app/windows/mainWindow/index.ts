import { BrowserWindow, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import * as path from 'path'
import { buildMenu } from '../../menus/app_menu'
import Translator from '../../plugins/translator'

class MainWindow {
  win: BrowserWindow | null
  translator: Translator

  constructor (translator: Translator) {
    // win代表electron窗口实例
    // win is this electron window instance
    this.win = null
    this.translator = translator
  }

  _initBrowserPage () {
    if (this.win === null) {
      return
    }

    if (process.env.WEBPACK_DEV_SERVER_URL) {
      this.win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    } else {
      createProtocol('app')
      this.win.loadURL('app://./index.html')
    }

    this.win.on('closed', () => {
      this.win = null
    })
  }

  createWindow () {
    this.win = new BrowserWindow({
      width: 1100,
      height: 770,
      minWidth: 1100,
      minHeight: 770,
      webPreferences: {
        // 设为false允许跨域
        webSecurity: false,
        nodeIntegration: true,
        preload: path.join(__dirname, 'preload.js')
      },
      // eslint-disable-next-line no-undef
      // @ts-ignore
      icon: path.join(__static, 'app.ico')
    })

    // 初始化浏览器页面
    this._initBrowserPage()
  }
}

export default MainWindow
