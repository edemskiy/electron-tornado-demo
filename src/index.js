const electron = require("electron");
const path = require("path");
const { app, BrowserWindow, ipcMain } = electron;

process.env.NODE_ENV = "development";

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({});

  mainWindow.loadURL(`file://${path.join(__dirname, "/index.html")}`);

  mainWindow.on("closed", app.quit);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
