import { app, BrowserWindow } from 'electron'
import path from 'path'
import { i18n } from './configs/i18next.config'
import { buildMenu } from './menu'

let mainWindow: Electron.BrowserWindow | null

function createWindow () {
  i18n.on('loaded', (loaded) => {
    i18n.changeLanguage('en')
    i18n.off('loaded')
  })
  i18n.on('languageChanged', (lng) => {
    buildMenu(app, mainWindow, i18n)
  })

  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
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

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
