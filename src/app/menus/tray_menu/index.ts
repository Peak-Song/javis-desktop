import { app, dialog, Menu } from 'electron'
import { Translator } from '../../plugins'
import WindowManager from '../../windows'

export function setAppTrayMenu (translator: Translator, windowManager: WindowManager) {
  // 翻译器函数
  // Translator function
  const $t = translator.get()

  const template = [
    {
      key: '1',
      label: $t('trayMenu.reset'), // 支持多国语言 / support multi-language
      click: () => {
        if (!windowManager.mainWindow.win) {
          windowManager.mainWindow.createWindow()
        }

        if (windowManager.mainWindow.win !== null) {
          // 执行electron窗口对象方法 / Execute electron window object method
          windowManager.mainWindow.win.restore()
          windowManager.mainWindow.win.moveTop()
        }
      }
    },
    {
      key: '2',
      label: $t('trayMenu.openLink'),
      click: () => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { shell } = require('electron')
        shell.openExternal('https://www.electronjs.org/docs')
      }
    },
    {
      key: '3',
      label: $t('trayMenu.openDialog'),
      click: () => {
        dialog.showMessageBox({
          type: 'info',
          title: $t('trayMenu.dialog.title'),
          message: $t('trayMenu.dialog.message'),
          detail: $t('trayMenu.dialog.detail')
        }).then(r => {
        })
      }
    },
    {
      key: '4',
      label: $t('trayMenu.exit'),
      click: () => {
        app.exit()
      }
    }
  ]
  return Menu.buildFromTemplate(template)
}
