export class Common {
  private usernameLabel: string = "#userName-value";

  get usernameLabelElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.usernameLabel);
  }
}
