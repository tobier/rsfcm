const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        backgroundColor: '#282c34', // Set a custom background color
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
            contextIsolation: true,
        }
    });

    win.loadFile(path.join(__dirname, '../dist/index.html'));

    win.once('ready-to-show', () => {
        //Menu.setApplicationMenu(null);
        //win.setMenuBarVisibility(false);
        win.show();
    });

}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});