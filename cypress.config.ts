import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require("cy-verify-downloads");

export default defineConfig({
  e2e: {
    baseUrl: "https://practice.expandtesting.com/",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", verifyDownloadTasks);
    },
    env: {
      demoQA: "https://demoqa.com",
    },
  },
});
