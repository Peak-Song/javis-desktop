import { MenuItemConstructorOptions } from 'electron'
import i18next from 'i18next'
import config from '../configs/app.config'

export function lang_opt (app: Electron.App,
  mainWindow: Electron.BrowserWindow | null,
  i18n: typeof i18next): MenuItemConstructorOptions {
  return {
    label: i18n.t('Language'),
    submenu: config.languages.map((languageCode) => {
      return {
        label: i18n.t(languageCode),
        type: 'radio',
        checked: i18n.language === languageCode,
        click: () => {
          i18n.changeLanguage(languageCode)
        }
      }
    })
  }
}
