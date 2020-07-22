import { GLOBAL_CONFIG_SAVE_MSG } from '../../constants'
import { ipcMain } from 'electron'

ipcMain.on(GLOBAL_CONFIG_SAVE_MSG, (event, data) => {
  console.log(data)
  // event.reply('asynchronous-reply', 'pong')
})
