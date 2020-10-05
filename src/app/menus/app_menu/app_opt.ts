import { MenuItem, MenuItemConstructorOptions, app } from 'electron'
import { Translator } from '../../plugins'

export function appOpt (mainWindow: Electron.BrowserWindow | null,
  translator: Translator): MenuItemConstructorOptions {
  const $t = translator.get()

  return {
    label: $t('Javis Desktop'),
    submenu: [
      {
        label: $t('Open DevTool'),
        accelerator: 'F12',
        click: (menuItem: MenuItem, browserWindow: (Electron.BrowserWindow) | (undefined)): void => {
          if (browserWindow != null) {
            browserWindow.webContents.openDevTools()
          }
        }
      },
      {
        label: $t('Quit'),
        accelerator: 'Command+Q',
        click: () => {
          app.quit()
        }
      }
    ]
  }
}
