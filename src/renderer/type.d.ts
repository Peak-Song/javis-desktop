// import ipcService from './plugins/ipcService'

export interface AlertInfo {
  title: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

// declare module 'vue/types/vue' {
//   interface Vue {
//     $ipcRenderer: typeof ipcService
//   }
// }
