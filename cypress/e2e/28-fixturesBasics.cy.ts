import { testData } from "./model";

describe("Fixtures", () => {
  it("Reading JSON and printing using log", () => {
    cy.fixture("jsonexample").then((testData: testData) => {
      cy.log("Printing Objs", testData);
      cy.log("Property 1 :", testData.property1);
    });
  });
});
