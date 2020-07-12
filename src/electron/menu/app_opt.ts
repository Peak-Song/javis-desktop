import { MenuItemConstructorOptions } from 'electron'
import i18next from 'i18next'

export function app_opt (app: Electron.App,
  mainWindow: Electron.BrowserWindow | null,
  i18n: typeof i18next): MenuItemConstructorOptions {
  return {
    label: i18n.t('About'),
    submenu: [
      {
        label: i18n.t('About Javis Desktop'),
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        label: i18n.t('Hide App'),
        accelerator: 'Command+H',
        role: 'hide'
      },
      {
        label: i18n.t('Hide Others'),
        accelerator: 'Command+Shift+H',
        role: 'hideOthers'
      },
      {
        label: i18n.t('Show All'),
        role: 'unhide'
      },
      {
        type: 'separator'
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
