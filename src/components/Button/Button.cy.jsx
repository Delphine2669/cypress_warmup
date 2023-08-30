import Button from "./Button";
describe("<Button/>", () => {
  it("display the button text", () => {
    cy.mount(<Button />);
    cy.get("button").should("have.text", "Submit");
  });
});
