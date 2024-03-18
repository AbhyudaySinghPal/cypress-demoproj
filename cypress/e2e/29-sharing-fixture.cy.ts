import { testData } from "./model";

Cypress.session.clearAllSavedSessions();

describe("Sharing fixtures data using alias", () => {
  beforeEach("Using Alias", function () {
    cy.fixture("jsonexample").as("testD");
  });

  it("Sharing Fixture 1", function () {
    cy.get<testData>("@testD").then((testData) => {
      cy.log("Property1 :", testData.property1);
    });
  });

  it("Sharing Fixture 2", function () {
    cy.get<testData>("@testD").then((testData) => {
      cy.log("Property2 :", testData.property2);
    });
  });
});
