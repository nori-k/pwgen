const builder = require("electron-builder");

builder.build({
  config: {
    appId: "pwgenapp",
    mac: {
      target: "zip"
    }
  }
});
