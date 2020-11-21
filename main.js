const { app, BrowserWindow, globalShortcut } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1100,
    height: 550,
    backgroundColor: '#333333',
    icon: `file://${__dirname}/dist/assets/logo.png`,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      backgroundThrottling: false,
      enableRemoteModule: true
    }
  });
  // Catch and prevent devtools shortcut
  const ret = globalShortcut.register('CommandOrControl+Shift+I', () => {});

  win.loadURL(`file://${__dirname}/dist/index.html`);
  win.setFullScreenable(false);
  win.setResizable(false);
  win.setMaximizable(false);
  win.setMenuBarVisibility(false);
  win.webContents.openDevTools({detached: true});

  win.on('closed', function () {
    win = null;
  });
}

app.on('ready', createWindow);
app.on('will-quit', () => {
  // Unregister a shortcut.
  globalShortcut.unregister('CommandOrControl+Shift+I')

  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})
app.on('window-all-closed', function () {
  app.quit();
});
