import MainWindow from './mainWindow'
import { Translator } from '../plugins'

class WindowManager {
  mainWindow: MainWindow

  constructor (translator: Translator) {
    this.mainWindow = new MainWindow(translator)
  }

  // 创建所有窗口
  createAll () {
    this.mainWindow.createWindow()
  }
}
export default WindowManager
