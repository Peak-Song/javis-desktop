import { ipcRenderer } from 'electron'

const ipcService = Object.create(null)

function install (app) {
  app.prototype.$ipcRenderer = {
    send: (msgType, msgData) => { ipcRenderer.send(msgType, msgData) },
    on: (channel, listener) => { ipcRenderer.on(channel, listener) },
    sendSync: (msgType, msgData) => { return ipcRenderer.sendSync(msgType, msgData) }
  }
}

ipcService.install = install

export default ipcService
