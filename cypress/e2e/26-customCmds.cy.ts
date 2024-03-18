Cypress.session.clearAllSavedSessions();

describe("Custom Cmds", () => {
  beforeEach("Visit Site", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });

  it("Login using custom cmd", () => {
    cy.login("test", "Test1234*");
  });
});
