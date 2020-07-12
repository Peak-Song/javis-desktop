import { MenuItemConstructorOptions } from 'electron'
import i18next from 'i18next'

export function img_opt (app: Electron.App,
  mainWindow: Electron.BrowserWindow | null,
  i18n: typeof i18next): MenuItemConstructorOptions {
  return {
    label: i18n.t('Img+'),
    toolTip: '',
    submenu: [
      {
        label: i18n.t('View')
      },
      {
        label: i18n.t('Search')
      }
    ]
  }
}
