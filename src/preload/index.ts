import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { GetNotes, ReadNote } from '@shared/types'

// Custom APIs for renderer
if (!process.contextIsolated) {
  throw new Error('Context Isolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
    readNotes: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args)
  })
} catch (error) {
  console.log(error)
}
