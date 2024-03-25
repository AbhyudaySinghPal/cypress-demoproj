import "@testing-library/cypress/add-commands";
import "@4tw/cypress-drag-drop";

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      safeLogin(username: string, passwword: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("login", (username: string, password: string) => {
  cy.get("#userName").type(username);
  cy.get("#password").type(password, { log: false });
  cy.get("#login").click();
  cy.wait(15000);
  cy.location().url().should("contain", "profile");
});

Cypress.Commands.add("safeLogin", (username: string, password: string) => {
  cy.get("#userName").type(username);
  cy.get("#password").type(password, { log: false });
  cy.get("#login").click();
});
