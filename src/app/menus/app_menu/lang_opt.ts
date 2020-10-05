import { MenuItemConstructorOptions } from 'electron'
import config from '../../../app.config'
import { Translator } from '../../plugins'
import i18n from '../../../locales'

export function langOpt (mainWindow: Electron.BrowserWindow | null,
  translator: Translator): MenuItemConstructorOptions {
  const $t = translator.get()

  return {
    label: $t('Language'),
    submenu: config.languages.map((languageCode: string) => {
      return {
        label: $t(languageCode),
        type: 'radio',
        checked: i18n.locale === languageCode,
        click: () => {
          translator.changeLang(languageCode)
        }
      }
    })
  }
}
