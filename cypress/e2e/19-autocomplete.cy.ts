describe("Autocomplete", () => {
  beforeEach("Visit Site", () => {
    cy.visit(`${Cypress.env("demoQA")}/auto-complete`);
  });
  // #react-select-2-option-0 id generated dynamically
  it("AutoComplete", () => {
    cy.get(".auto-complete__value-container").first().type("Y");
    cy.get("#react-select-2-option-0").should("have.text", "Yellow").click();
    cy.get(".auto-complete__multi-value__label").should("have.text", "Yellow");
  });
});
