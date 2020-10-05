import AppManager from '../appManager'
import WindowManager from '../windows'
import { Translator } from '../plugins'
import { setAppTrayMenu } from './tray_menu'

class MenuManager {
  appManager: AppManager
  windowManager: WindowManager
  translator: Translator

  constructor (appManager: AppManager) {
    this.appManager = appManager
    this.windowManager = appManager.windowManager
    this.translator = appManager.translator
  }

  // 程序托盘菜单
  AppTrayMenu () {
    return setAppTrayMenu(this.translator, this.windowManager)
  }
}

export default MenuManager
