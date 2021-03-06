/* global __static */
import { Menu, Tray } from 'electron'

// management
import EventManager from './events'
import WindowManager from './windows'
import MenuManager from './menus'

// plugins
import Translator from './plugins/translator'
import * as path from 'path'

class AppManager {
  translator: Translator
  windowManager: WindowManager
  menuManager: MenuManager
  eventManager: EventManager
  tray: Tray | null

  constructor () {
    this.tray = null

    // 翻译器
    this.translator = new Translator()

    // 窗口管理器，主要负责管理、创建窗口
    // Window manager, mainly responsible for managing and creating windows
    this.windowManager = new WindowManager(this.translator)

    // 菜单管理器，主要负责获取菜单对象
    // Menu manager, mainly responsible for get the menu object
    this.menuManager = new MenuManager(this)

    // 事件管理器，主要负责初始化ipc、app事件
    // Event manager, mainly responsible for initializing ipc, app events
    this.eventManager = new EventManager(this)
  }

  // 初始化app，创建窗口及托盘
  // Initialize the app, create windows and tray
  initApp () {
    this.windowManager.createAll()
    this._setAppMainMenu()
    this.createAppTray()
  }

  languageChange (lang: string) {
    this.translator.changeLang(lang)

    // 重新设置托盘菜单（为了变更语言）
    // Reset the language of the tray menu
    this._setAppTrayMenu()

    // 重新设置程序菜单（为了变更语言）
    // Reset the language of the app menu
    this._setAppMainMenu()
  }

  // 创建托盘
  createAppTray () {
    if (this.tray === null) {
      // eslint-disable-next-line no-undef
      // @ts-ignore
      this.tray = new Tray(path.join(__static, 'app.ico'))
      this.tray.setToolTip('运行中！\nStill Working!')
      this._setAppTrayMenu()
    }
  }

  // 创建托盘菜单
  _setAppTrayMenu () {
    const menu = this.menuManager.AppTrayMenu()
    if (this.tray !== null) {
      this.tray.setContextMenu(menu)
    }
  }

  // 创建系统主菜单
  _setAppMainMenu () {
    const template = this.menuManager.AppMainMenu()
    const menu = Menu.buildFromTemplate(template)
    if (process.platform === 'darwin') {
      Menu.setApplicationMenu(menu)
    } else {
      if (this.windowManager.mainWindow.win) { this.windowManager.mainWindow.win.setMenu(menu) }
    }
  }
}

export default AppManager
