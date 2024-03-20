/// <reference types = "cypress"/>
Cypress.session.clearAllSavedSessions();
let externalVariable: string = "test";

describe("Using Variables across IT's ", function () {
  it("Get Dyanmic ID", function () {
    cy.visit(`${Cypress.env("uiTesting")}/dynamicid`);
    cy.contains("button", "Button with Dynamic ID")
      .invoke("text")
      .then((text) => {
        externalVariable = text;
        cy.wrap(externalVariable).as("textFromContains");
        cy.log(externalVariable);
      });
    cy.get("@textFromContains").then((text) => {
      cy.log("This is text from outside closure", text);
    });
  });

  it("Sharing Variable outisde IT closure", function () {
    externalVariable = this.textFromContains;
    cy.log(externalVariable);
  });
});
