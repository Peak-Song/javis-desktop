import { IpcRendererEvent } from 'electron'

export interface CallbackCache {
  channel: string;
  listener: (event: IpcRendererEvent, ...args: never[]) => void;
}
