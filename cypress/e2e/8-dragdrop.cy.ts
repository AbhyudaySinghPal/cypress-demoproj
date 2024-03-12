describe("Drag and Drop using plugin", () => {
  beforeEach("Visit Site", () => {
    cy.visit(`${Cypress.env("demoQA")}/droppable`);
  });

  it("drag and drop", () => {
    cy.get("#droppable").drag("#draggable", { force: true });
  });
});
