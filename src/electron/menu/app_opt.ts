import { MenuItemConstructorOptions, MenuItem } from 'electron'
import i18next from 'i18next'

export function app_opt (app: Electron.App,
  mainWindow: Electron.BrowserWindow | null,
  i18n: typeof i18next): MenuItemConstructorOptions {
  return {
    label: i18n.t('Javis Desktop'),
    submenu: [
      {
        label: i18n.t('Preference'),
        click: () => {
          console.log('Preference click')
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
