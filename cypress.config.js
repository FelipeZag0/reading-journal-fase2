const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000/",
    specPattern: "cypress/tests/e2e/**/**.cy.js",
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      apiUrl: "http://localhost:5000"
    }
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
