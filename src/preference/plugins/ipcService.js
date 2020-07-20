import { ipcRenderer } from 'electron'
import { CLIENT_NORMAL_MSG, CRAWLER_NORMAL_MSG } from '../../constants'

const ipcService = Object.create(null)
const callbackCache = []

function install (app) {
  app.prototype.$ipcRenderer = {
    send: (msgType, msgData) => {
      ipcRenderer.send(CLIENT_NORMAL_MSG, {
        type: msgType,
        data: msgData
      })
    },
    on: (channel, listener) => {
      callbackCache.push({
        channel,
        listener
      })
    },
    detach: (channel) => {
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
