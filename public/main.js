const { app, BrowserWindow } = require("electron");

const path = require('path')
const isDev = require('electron-is-dev')

require("@electron/remote/main").initialize();


let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  mainWindow.loadURL(
      isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    )
};

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicityle with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it is common to re-create a window in the app when the
  // dock icon is clicked and there are no other window open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
