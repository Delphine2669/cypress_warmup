import Form from "./Form";
describe("<Form/>", () => {
  it("tick the checkbox", () => {
    cy.mount(<Form />);
    cy.get("#checkYes").check();
  });
  it("write into the input", () => {
    cy.mount(<Form />);
    cy.get("#userInput").type("Forza Italia");
  });
  it("click on the submit button", () => {
    cy.mount(<Form />);
    cy.get("button").click;
  });
});
