import { Menu, MenuItemConstructorOptions } from 'electron'
import { Translator } from '../../plugins'

import { appOpt } from './app_opt'
import { imgOpt } from './img_opt'
import { langOpt } from './lang_opt'
import { listOpt } from './list_opt'
import { noteOpt } from './note_opt'
import { windowOption } from './window_opt'

export function buildMenu (mainWindow: Electron.BrowserWindow| null, translator: Translator) {
  const menus: MenuItemConstructorOptions[] = [
    appOpt(mainWindow, translator),
    imgOpt(mainWindow, translator),
    listOpt(mainWindow, translator),
    noteOpt(mainWindow, translator),
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...windowOption
      ]
    },
    langOpt(mainWindow, translator)
  ]

  return menus
}
