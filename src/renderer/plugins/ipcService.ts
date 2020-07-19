import { ipcRenderer, IpcRendererEvent } from 'electron'
import { CLIENT_NORMAL_MSG, CRAWLER_NORMAL_MSG } from '../../constants'
import { CallbackCache } from '@/type'
import Vue from 'vue'

const ipcService = Object.create(null)
const callbackCache: Array<CallbackCache> = []

function install (app: typeof Vue) {
  app.prototype.$ipcRenderer = {
    send: (msgType: string, msgData: never) => {
      ipcRenderer.send(CLIENT_NORMAL_MSG, {
        type: msgType,
        data: msgData
      })
    },
    on: (channel: string, listener: (event: IpcRendererEvent, ...args: never[]) => void) => {
      callbackCache.push({
        channel,
        listener
      })
    },
    detach: (channel: string) => {
      const idx = callbackCache.findIndex(v => v.channel === channel)
      idx > -1 ? callbackCache.splice(idx, 1) : console.error(`error type ${channel}`)
    }
  }
  ipcRenderer.on(CRAWLER_NORMAL_MSG, (sender, msg) => {
    callbackCache.forEach(cache => {
      if (cache.channel === msg.channel) {
        cache.listener && cache.listener(msg.data)
      }
    })
  })
}

ipcService.install = install

export default ipcService
