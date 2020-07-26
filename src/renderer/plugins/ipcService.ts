import { ipcRenderer, IpcRendererEvent } from 'electron'
import Vue from 'vue'

const ipcService = Object.create(null)

function install (app: typeof Vue) {
  app.prototype.$ipcRenderer = {
    send: (msgType: string, msgData:never) => { ipcRenderer.send(msgType, msgData) },
    on: (channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void) => {
      ipcRenderer.on(channel, listener)
    },
    sendSync: (msgType: string, msgData:never) => { return ipcRenderer.sendSync(msgType, msgData) }
  }
}

ipcService.install = install

export default ipcService
