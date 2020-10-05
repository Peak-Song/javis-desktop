import { MenuItemConstructorOptions } from 'electron'
import { Translator } from '../../plugins'

export function listOpt (mainWindow: Electron.BrowserWindow | null,
  translator: Translator): MenuItemConstructorOptions {
  const $t = translator.get()

  return {
    label: $t('List'),
    submenu: [
      {
        label: $t('View')
      },
      {
        label: $t('Search')
      }
    ]
  }
}
