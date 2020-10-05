import { MenuItemConstructorOptions } from 'electron'
import { Translator } from '../../plugins'

export function imgOpt (mainWindow: Electron.BrowserWindow | null,
  translator: Translator): MenuItemConstructorOptions {
  const $t = translator.get()

  return {
    label: $t('Img+'),
    toolTip: '',
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
