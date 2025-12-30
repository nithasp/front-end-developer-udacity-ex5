describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to the Card Sets page when clicking Card Sets in the menu", () => {
    cy.get("#cardSetPage").click();

    cy.get('[data-cy="header"]').should("contain", "Study Night");
    cy.url().should("include", "/");
  });

  it("should navigate to the About page when clicking About in the menu", () => {
    cy.get("#aboutPage").click();

    cy.contains("About").should("be.visible");
  });

  it("should navigate to the Home page when clicking Home in the menu", () => {
    cy.get("#aboutPage").click();

    cy.get("#homePage").click();

    cy.get('[data-cy="header"]').should("contain", "Study Night");
  });

  it("should verify all navigation menu items are present", () => {
    cy.get("#homePage").should("be.visible").and("contain", "Home");
    cy.get("#aboutPage").should("be.visible").and("contain", "About");
    cy.get("#cardSetPage").should("be.visible").and("contain", "Card Sets");
  });
});
