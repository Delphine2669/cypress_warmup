import NavBar from "./NavBar";

describe("<NavBar/> ", () => {
  it("should count the ul elements", () => {
    cy.mount(<NavBar />);
    cy.get("ul").should(($ul) => {
      expect($ul).to.have.length(1);
    });
  });
  it("should count the li elements", () => {
    cy.mount(<NavBar />);
    cy.get("li").should(($li) => {
      expect($li).to.have.length(3);
    });
  });
  it("should count the @ elements", () => {
    cy.mount(<NavBar />);
    cy.get("a").should(($a) => {
      expect($a).to.have.length(3);
      expect($a.first()).to.contain("Homepage");
    });
  });
});
