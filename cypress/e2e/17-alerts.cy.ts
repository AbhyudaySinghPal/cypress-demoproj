describe("Alerts", () => {
  beforeEach("Visit Website", () => {
    cy.visit("https://demoqa.com/alerts");
  });
  it("JS alert", () => {
    cy.get("button#alertButton").click();
    cy.on("window:alert", (msg) => {
      expect(msg).to.be.equal("You clicked a button");
    });
  });
  it("JS alert timeout", () => {
    cy.get("button#timerAlertButton").click({ timeout: 5000 });
    cy.on("window:alert", (msg) => {
      expect(msg).to.be.equal("This alert appeared after 5 seconds");
    });
  });
  it("JS confirm ok button", () => {
    cy.get("button#confirmButton").click();
    cy.on("window:confirm", (msg) => {
      expect(msg).to.be.equal("Do you confirm action?");
    });
    cy.on("windows:confirm", () => true);
    cy.get("#confirmResult").should("have.text", "You selected Ok");
  });
  it("JS confirm cancel button", () => {
    cy.get("button#confirmButton").click();
    cy.on("window:confirm", (msg) => {
      expect(msg).to.be.equal("Do you confirm action?");
    });
    // cy.on("windows:confirm", () => false);
    // cy.get("#confirmResult", { timeout: 5000 }).should(
    //   "have.text",
    //   "You selected Cancel"
    // );
  });
  it("JS prompt", () => {
    cy.get("#promtButton").click();
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Please enter your name");
    });
  });
});
