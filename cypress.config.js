const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://www.saucedemo.com/',
    baseUrl2:'https://osc-ultimate-demo.mageplaza.com/',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
