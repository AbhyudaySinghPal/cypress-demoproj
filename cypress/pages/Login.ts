import { Common } from "./Common";

class Login extends Common {
  // Get ID's and Locators of Elements
  private username: string = "#userName";
  private password: string = "#password";
  private loginBtn: string = "#login";
  private loginMessage: string = "#name";

  // Get DOM Elements
  get usernameElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.username);
  }

  get passwordElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.password);
  }

  get loginBtnElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.loginBtn);
  }

  get loginMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.loginMessage);
  }

  // Functions to Act upon the DOM elements in specific page
  submitLogin(uname: string, pwd: string): void {
    this.usernameElement.type(uname);
    this.passwordElement.type(pwd);
    this.loginBtnElement.click();
  }

  visit(): void {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  }
}

export const LoginPage = new Login();
