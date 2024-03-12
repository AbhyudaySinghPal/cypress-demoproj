describe("Tooltips", () => {
  beforeEach("Visit Site", () => {
    cy.visit(`${Cypress.env("demoQA")}/tool-tips`);
  });

  it("Check Tool Tips", () => {
    cy.get("#toolTipButton").realHover();
    cy.get(".tooltip-inner").should("have.text", "You hovered over the Button");
    cy.contains("a", "Contrary").realHover();
    cy.get(".tooltip-inner").should(
      "have.text",
      "You hovered over the Contrary"
    );
  });
});
