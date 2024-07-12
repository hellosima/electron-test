const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('myAPI', {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron,
    
    saveFile: (data)=>{
        ipcRenderer.send('file-save', data)
    }

})