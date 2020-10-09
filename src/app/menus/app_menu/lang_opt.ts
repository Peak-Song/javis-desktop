import { MenuItemConstructorOptions } from 'electron'
import config from '../../../app.config'
import { Translator } from '../../plugins'
import i18n from '../../../locales'
import AppManager from '../../appManager'
import logger from 'electron-log'

export function langOpt (mainWindow: Electron.BrowserWindow | null,
  translator: Translator, appManager: AppManager): MenuItemConstructorOptions {
  const $t = translator.get()

  return {
    label: $t('Language'),
    submenu: config.languages.map((languageCode: string) => {
      return {
        id: 'lang_' + languageCode,
        label: $t(languageCode),
        click: () => {
          logger.info('pick language ' + languageCode)
          appManager.languageChange(languageCode)
        }
      }
    })
  }
}
