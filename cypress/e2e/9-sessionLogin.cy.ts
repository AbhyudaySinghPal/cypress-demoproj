Cypress.session.clearAllSavedSessions();

describe("Using Session for Login", () => {
  beforeEach("Create Session", () => {
    cy.session("Session", () => {
      cy.visit(`${Cypress.env("demoQA")}/login`);
      cy.get("#userName").type("test");
      cy.get("#password").type("Test1234*");
      cy.get("#login").click();
      cy.url().should("contain", "profile");
    });
  });

  it("Check 1", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });

  it("Check 2", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
});
