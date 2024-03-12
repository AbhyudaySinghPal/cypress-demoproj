describe("Dynamic Table", () => {
  it("Dynamic Table Challenge", () => {
    cy.visit("/dynamic-table");
    cy.get(".table-striped")
      .find("tbody tr td")
      .each(($cell) => {
        if ($cell.text().includes("Chrome")) {
          let rowValues: string[] = [];
          rowValues.push($cell.next().text());
          rowValues.push($cell.next().next().text());
          rowValues.push($cell.next().next().next().text());
          rowValues.push($cell.next().next().next().next().text());
          cy.log("Chrome Row Values", rowValues);
          rowValues.forEach((ele) => {
            if (ele.includes("%")) {
              cy.log(ele);
              cy.get("p#chrome-cpu").should("have.text", `Chrome CPU: ${ele}`);
            }
          });
        }
      });
  });
});
