describe("SubMenus", () => {
  beforeEach("Visit Site", () => {
    cy.visit(`${Cypress.env("demoQA")}/menu#`);
  });
  it("Sub Menu Nav with real hover", () => {
    cy.contains("a", "Main Item 2").realHover();
    cy.contains("a", "SUB SUB LIST »").realHover();
  });
});
