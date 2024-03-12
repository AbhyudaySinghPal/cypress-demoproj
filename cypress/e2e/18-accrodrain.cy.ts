describe("Accordian", () => {
  beforeEach("Visit Site", () => {
    cy.visit(`${Cypress.env("demoQA")}/accordian`);
  });

  it("Accordian Check", () => {
    cy.get("div#section2Heading").click();
    cy.get("div#section1Heading").next().should("have.css", "display", "none");
    cy.get("div#section2Heading")
      .next()
      .should("have.css", "display", "block")
      .and("have.class", "show");
  });
});
