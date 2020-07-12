import { MenuItemConstructorOptions } from 'electron'
import i18next from 'i18next'

const isMac = process.platform === 'darwin'
export const window_option: Array<Pick<MenuItemConstructorOptions, 'role' | 'type'>> = isMac ? [
  { type: 'separator' },
  { role: 'front' },
  { type: 'separator' },
  { role: 'window' }
] : [
  { role: 'close' }
]
