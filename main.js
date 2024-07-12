const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const fs = require('fs')

function writeFile(_, data){
    fs.writeFileSync('D:/hello.txt', data)
}

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        heigth: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    ipcMain.on('file-save', writeFile)
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    console.log('aaaaaa')
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

