// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "./exceptions";
import "cypress-real-events";
import "cypress-file-upload";
import "cypress-mochawesome-reporter/register";
require("cy-verify-downloads").addCustomCommand();
// Alternatively you can use CommonJS syntax:
// require('./commands')

// beforeEach("Global Login Preserve", () => {
//   cy.session("mySession", () => {
//     cy.visit(`${Cypress.env("demoQA")}/login`);
//     cy.get("#userName").type("test");
//     cy.get("#password").type("Test1234*");
//     cy.get("#login").click();
//     cy.wait(7000);
//     cy.url().should("contain", "profile");
//   });
// });
