const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1100,
    height: 550,
    backgroundColor: '#333333',
    icon: `${__dirname}/dist/assets/logo.png`,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      backgroundThrottling: false,
      enableRemoteModule: true
    }
  });
  win.loadURL(`file://${__dirname}/dist/index.html`);
  win.setFullScreenable(false);
  win.setResizable(false);
  win.setMaximizable(false);
  win.setMenuBarVisibility(false);
  win.webContents.openDevTools({detached: true});

  win.webContents.on('before-input-event', (event, input) => {
    if ((input.shift && input.control && input.key.toLowerCase() === 'i')
      || input.key.toLocaleLowerCase() === 'f5'
      || (input.control && input.key.toLocaleLowerCase() === 'r')
      || (input.control && input.shift && input.key.toLocaleLowerCase() === 'r')
      || (input.control && input.key.toLocaleLowerCase() === 'f5')
      || (input.control && input.shift && input.key.toLocaleLowerCase() === 'f5')) {
      event.preventDefault()
    }
  });

  win.on('closed', function () {
    win = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
  app.quit();
});
