const os = require('os')
const { ipcMain } = require('electron')

ipcMain.hanlde('injectAPI:getOsInfo', () => { return os.platform() })
