import Navbar2 from "../Navbar2/Navbar2";

describe("<Navbar2/>", () => {
  it("handles navigation to form link", () => {
    cy.mount(<Navbar2 />);
    cy.get("li:first").click();
  });
  //   it("handles navigation to basic navbar link", () => {
  //     cy.mount(<Navbar2 />);
  //     cy.get("#navbar").click();
  //   });
  //   it("handles navigation to basic button link", () => {
  //     cy.mount(<Navbar2 />);
  //     cy.get("#button").click();
  //   });
});
