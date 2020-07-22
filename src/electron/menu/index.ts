import { Menu, MenuItemConstructorOptions } from 'electron'
import i18next from 'i18next'

import config from '../configs/app.config'
import { appOpt } from './app_opt'
import { imgOpt } from './img_opt'
import { langOpt } from './lang_opt'
import { listOpt } from './list_opt'
import { noteOpt } from './note_opt'
import { windowOption } from './window_opt'

export function buildMenu (app: Electron.App, mainWindow: Electron.BrowserWindow| null, i18n: typeof i18next) {
  const menus: MenuItemConstructorOptions[] = [
    appOpt(app, mainWindow, i18n),
    imgOpt(app, mainWindow, i18n),
    listOpt(app, mainWindow, i18n),
    noteOpt(app, mainWindow, i18n),
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...windowOption
      ]
    },
    langOpt(app, mainWindow, i18n)
  ]

  if (config.platform === 'darwin') {
    Menu.setApplicationMenu(Menu.buildFromTemplate(menus))
  } else {
    if (mainWindow != null) {
      mainWindow.setMenu(Menu.buildFromTemplate(menus))
    }
  }
}
