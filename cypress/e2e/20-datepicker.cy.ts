describe("DatePicker", () => {
  beforeEach("Visit Site", () => {
    cy.visit(`${Cypress.env("demoQA")}/date-picker`);
  });

  it("Validate date picker", () => {
    cy.get("input#datePickerMonthYearInput").click();
    cy.get(".react-datepicker__month-select").select("3");
    cy.get(".react-datepicker__year-select").select("1998");
    cy.findByText("22").click();
    cy.get("input#datePickerMonthYearInput").should("have.value", "04/22/1998");
  });
});
