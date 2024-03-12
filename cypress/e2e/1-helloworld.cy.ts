describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.log("Hello World");
  });
});

describe("Intercepting API Spying", () => {
  beforeEach("Intercept the api", () => {
    cy.visit("https://demoqa.com/links");
    cy.intercept("GET", `${Cypress.env("demoQA")}/created`).as("getLinks");
  });

  it("test results", () => {
    cy.get("a#created").click();
    cy.wait("@getLinks").then((request) => {
      expect(request.response.statusCode).to.equal(201);
      expect(request.response.statusMessage).to.be.equal("Created");
    });
  });
});

describe("Uploading Docs", () => {
  beforeEach("Visit DemoQA upload download page", () => {
    cy.visit(`${Cypress.env("demoQA")}/upload-download`);
  });

  it("upload the doc", () => {
    cy.get("input#uploadFile").attachFile("example.json");
    cy.get("p#uploadedFilePath").should("contain", "example.json");
  });

  it("download the doc", () => {
    cy.get("a#downloadButton").click();
    cy.wait(4000);
    cy.verifyDownload("sampleFile.jpeg");
  });
});
