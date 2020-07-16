import { ipcRenderer } from 'electron'
import {
  CLIENT_NORMAL_MSG,
  CRAWLER_NORMAL_MSG
} from '../../constants'

const ipcService = Object.create(null); const callbackCache = []
ipcService.install = Vue => {
  Vue.prototype.$ipcRenderer = {
    send: (msgType: string, msgData: any) => {
      ipcRenderer.send(CLIENT_NORMAL_MSG, {
        type: msgType,
        data: msgData
      })
    },
    on: (type: string, callback: Function) => {
      callbackCache.push({
        type,
        callback
      })
    },
    detach: type => {
      const idx = callbackCache.findIndex(v => v.type === type)
      idx > -1 ? callbackCache.splice(idx, 1) : console.error(`error type ${type}`)
    }
  }
  ipcRenderer.on(CRAWLER_NORMAL_MSG, (sender, msg) => {
    callbackCache.forEach(cache => {
      if (cache.type === msg.type) {
        cache.callback && cache.callback(msg.data)
      }
    })
  })
}

export default ipcService
