import { LoginPage } from "../pages/Login";
Cypress.session.clearAllSavedSessions();

describe("Page Object Model", () => {
  beforeEach("Visit Site", () => {
    LoginPage.visit();
  });
  it("Successful Login", () => {
    LoginPage.submitLogin("test", "Test1234*");
    cy.wait(8000);
    // Assertions
    cy.location().then((loc) => {
      expect(loc.pathname).to.equal("/profile");
    });
    LoginPage.usernameLabelElement.should("contain", "test");
  });

  it("Unsuccessful Login", () => {
    LoginPage.submitLogin("wronguser", "wrongpwd");
    // Assertions
    LoginPage.loginMessageElement.should(
      "contain",
      "Invalid username or password!"
    );
  });
});
