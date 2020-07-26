import { app, BrowserWindow, ipcMain } from 'electron'
import {
  GLOBAL_CONFIG_SAVE_GIT_PATH, GLOBAL_CONFIG_REQ_MSG,
  GLOBAL_CONFIG_SAVE_REPO_DIR, REFRESH_ALERT_BAR
} from '../constants'
import { i18n } from './configs/i18next.config'
import { buildMenu } from './menu'
import Settings from './configs/setting'

let mainWindow: Electron.BrowserWindow | null

class App {
  constructor () {
    this.registerAppEvent()
    this.registerMainEvent()
  }

  registerMainEvent () {
    ipcMain.on(GLOBAL_CONFIG_SAVE_GIT_PATH, (event, data) => {
      console.log('Main Process receive GLOBAL_CONFIG_SAVE_GIT_PATH signal')
      Settings.set('globalConfig.gitPath', data)
      event.sender.send(REFRESH_ALERT_BAR, { title: 'begin to check git executable', type: 'info' })
    })

    ipcMain.on(GLOBAL_CONFIG_SAVE_REPO_DIR, (event, data) => {
      console.log('Main Process receive GLOBAL_CONFIG_SAVE_REPO_DIR signal')
      Settings.set('globalConfig.localGitDir', data)
    })

    ipcMain.on(GLOBAL_CONFIG_REQ_MSG, (event) => {
      console.log('Main Process receive GLOBAL_CONFIG_REQ_MSG signal')
      event.returnValue = Settings.get('globalConfig')
    })
  }

  registerAppEvent () {
    app.on('ready', this.createWindow)

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })

    app.on('activate', () => {
      if (mainWindow === null) {
        this.createWindow()
      }
    })
  }

  createWindow () {
    i18n.on('loaded', () => {
      i18n.changeLanguage(Settings.get('language', 'cn'))
      i18n.off('loaded')
    })
    i18n.on('languageChanged', () => {
      buildMenu(app, mainWindow, i18n)
    })

    mainWindow = new BrowserWindow({
      height: 950,
      width: 1278,
      webPreferences: {
        preload: 'dist/preload.js',
        nodeIntegration: true
      }
    })

    mainWindow.loadFile('dist/renderer/index.html')

    mainWindow.on('closed', () => {
      mainWindow = null
    })
  }

  // quit () {
  //   app.quit()
  // }
}

export default App
