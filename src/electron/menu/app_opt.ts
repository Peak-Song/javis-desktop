import { MenuItemConstructorOptions, MenuItem } from 'electron'
import i18next from 'i18next'

export function appOpt (app: Electron.App,
  mainWindow: Electron.BrowserWindow | null,
  i18n: typeof i18next): MenuItemConstructorOptions {
  return {
    label: i18n.t('Javis Desktop'),
    submenu: [
      {
        label: i18n.t('Preference'),
        click: (menuItem: MenuItem, browserWindow: (Electron.BrowserWindow) | (undefined)): void => {
          if (browserWindow != null) {
            console.log('no null browser window')
            browserWindow.loadFile('dist/preference/index.html').then(
              () => { console.log('open') }
            ).catch((reason) => { console.log('exception' + reason) })
          }
        }
      },
      {
        label: i18n.t('About'),
        role: 'about'
      },
      {
        label: i18n.t('Open DevTool'),
        accelerator: 'F12',
        click: (menuItem: MenuItem, browserWindow: (Electron.BrowserWindow) | (undefined)): void => {
          if (browserWindow != null) {
            browserWindow.webContents.openDevTools()
          }
        }
      },
      {
        label: i18n.t('Quit'),
        accelerator: 'Command+Q',
        click: () => {
          app.quit()
        }
      }
    ]
  }
}
