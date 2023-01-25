const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 90000,
    responseTimeout: 90000,
    recoverFromRendererCrashes: true,
    supportFile: false,
    baseUrl: "https://localhost:3000/"
  }
});