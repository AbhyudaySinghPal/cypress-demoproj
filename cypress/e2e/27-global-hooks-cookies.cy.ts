Cypress.session.clearAllSavedSessions();

describe("Global Hooks Cookies", () => {
  beforeEach("Visit Site", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
  it("Success Login", () => {
    cy.contains("#userName-value", "test");
  });
  it("Cookie Count", () => {
    cy.getCookies().then((cookies) => {
      cy.log("Cookies :", cookies);
      expect(cookies).to.have.length(8);
    });
  });
});
