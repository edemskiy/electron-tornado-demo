const electron = require("electron");
const path = require("path");
const { app, BrowserWindow } = electron;

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
