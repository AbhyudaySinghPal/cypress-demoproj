import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require("cy-verify-downloads");

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  // Retry ability for run and open mode
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    baseUrl: "https://practice.expandtesting.com/",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", verifyDownloadTasks);
      // for the mochawesome reporter
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    env: {
      demoQA: "https://demoqa.com",
    },
  },
});
