import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
if (!process.contextIsolated) {
  throw new Error('Context Isolation must be enabled in the BrowserWindow')
}


try {
  contextBridge.exposeInMainWorld('context',{
    // TODO
  })
} catch (error) {
  console.log(error);
}
