import { MenuItemConstructorOptions } from 'electron'

const isMac = process.platform === 'darwin'
export const windowOption: Array<Pick<MenuItemConstructorOptions, 'role' | 'type'>> = isMac ? [
  { type: 'separator' },
  { role: 'front' },
  { type: 'separator' },
  { role: 'window' }
] : [
  { role: 'close' }
]
