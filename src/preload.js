// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const {
    contextBridge, ipcRenderer
} = require('electron');
const fs = require('fs');


contextBridge.exposeInMainWorld('electron', {
  showSaveDialog: async () => {
    const { filePath } = await ipcRenderer.invoke('show-save-dialog');
    return filePath;
  },
  savetoDom: (file, state) => {
    if (file) {
      const stateJson = JSON.stringify(state);
      fs.writeFileSync(file, stateJson);
      console.log('État sauvegardé dans :', file);
    } else {
      console.log('Sauvegarde annulée par l\'utilisateur.');
    }
  },
  showOpenDialog: async () => {
    try{
      const { filePaths } = await ipcRenderer.invoke('show-open-dialog');
      if (!filePaths || filePaths.length === 0) {
        console.log('Chargement annulé par l\'utilisateur.');
        return;
      }
  
      const filePath = filePaths[0];
      //const statePromise =ipcRenderer.invoke('load-workspace', filePath);
      const stateJson = fs.readFileSync(filePath, 'utf-8');
      //const state = await statePromise;
      const state = JSON.parse(stateJson);
  
      console.log('État chargé depuis :', filePath);
  
      // Charger l'état dans l'espace de travail
      return state;
    }catch (error) {
      console.error('Erreur lors de la communication avec le processus principal :', error);
      return null;
    }
  },
});

//API*/
const api = {
    send: (channel, data) => {
      ipcRenderer.send(channel, data);
    },
    receive: (channel, func) => {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    },
    invoke: (channel) => {
      ipcRenderer.invoke(channel);
    }
};


  
  // Exposer l'objet `api` au rendu HTML via un contextBridge
contextBridge.exposeInMainWorld('api', api);

