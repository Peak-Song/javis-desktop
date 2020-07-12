import { Menu, MenuItemConstructorOptions } from 'electron'
import i18next from 'i18next'

import config from '../configs/app.config'
import { app_opt } from './app_opt'
import { img_opt } from './img_opt'
import { lang_opt } from './lang_opt'
import { list_opt } from './list_opt'
import { note_opt } from './note_opt'
import { window_option } from './window_opt'

export function buildMenu (app: Electron.App, mainWindow: Electron.BrowserWindow| null, i18n: typeof i18next) {
  const menus: MenuItemConstructorOptions[] = [
    app_opt(app, mainWindow, i18n),
    img_opt(app, mainWindow, i18n),
    list_opt(app, mainWindow, i18n),
    note_opt(app, mainWindow, i18n),
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...window_option
      ]
    },
    lang_opt(app, mainWindow, i18n)
  ]

  if (config.platform === 'darwin') {
    Menu.setApplicationMenu(Menu.buildFromTemplate(menus))
  } else {
    if (mainWindow != null) {
      mainWindow.setMenu(Menu.buildFromTemplate(menus))
    }
  }
}
