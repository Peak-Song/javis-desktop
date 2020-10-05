import app from './app'
import ipc from './ipc'
import AppManager from '../appManager'

class EventManager {
  appManager: AppManager

  // 创建app、ipc事件
  constructor (appManager: AppManager) {
    this.appManager = appManager
    this.init()
  }

  init () {
    app.create(this.appManager)
    ipc.create(this.appManager)
  }
}

export default EventManager
