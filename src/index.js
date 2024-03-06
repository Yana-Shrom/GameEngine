
const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');



let mainWindow; 
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

function createMainWindow(){
  
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createMainWindow);



// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

ipcMain.handle('show-save-dialog', async () => {
  const mainWindow = BrowserWindow.getFocusedWindow();
  const { filePath } = await dialog.showSaveDialog(mainWindow, {
    title: 'Enregistrer l\'état du workspace',
    defaultPath: path.join(app.getPath('documents'), 'workspace-state.json'),
    filters: [{ name: 'Fichiers JSON', extensions: ['json'] }]
  });

  return { filePath };
});

ipcMain.handle('show-open-dialog', async () => {
  const mainWindow = BrowserWindow.getFocusedWindow();
  const { filePaths } = await dialog.showOpenDialog(mainWindow, {
    title: 'Charger l\'état du workspace',
    filters: [{ name: 'Fichiers JSON', extensions: ['json'] }],
    properties: ['openFile']
  });

  return { filePaths };
});
