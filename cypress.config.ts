import { defineConfig } from "cypress";

// Verify Downloads
const { verifyDownloadTasks } = require("cy-verify-downloads");

// Faker
const { faker } = require("@faker-js/faker");

export default defineConfig({
  // Cypress Cloud
  projectId: "jy535g",
  // Mochawesome reporter and config
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
      //Faker
      on("task", {
        freshUser() {
          let user = {
            username: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            registeredAt: faker.date.past(),
            vehicle: faker.vehicle.vehicle(),
          };
          return user;
        },
      });
    },
    env: {
      demoQA: "https://demoqa.com",
      uiTesting: "http://uitestingplayground.com",
      theInternet: "https://the-internet.herokuapp.com",
    },
  },
});
