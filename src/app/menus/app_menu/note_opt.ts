import { MenuItemConstructorOptions } from 'electron'
import { Translator } from '../../plugins'

export function noteOpt (mainWindow: Electron.BrowserWindow | null,
  translator: Translator): MenuItemConstructorOptions {
  const $t = translator.get()

  return {
    label: $t('Note'),
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
