import { GLOBAL_CONFIG_SAVE_MSG, GLOBAL_CONFIG_REQ_MSG } from '../../constants'
import { ipcMain } from 'electron'

ipcMain.on(GLOBAL_CONFIG_SAVE_MSG, (event, data) => {
  console.log(data)
  // event.reply('asynchronous-reply', 'pong')
})

ipcMain.on(GLOBAL_CONFIG_REQ_MSG, (event, data) => {
  //  todo get config json and return
  event.returnValue = 'pong'
})
