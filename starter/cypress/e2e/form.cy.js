describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#cardSetPage").click();
  });

  describe("Create Set Form", () => {
    it("should successfully submit a new card set with valid input (happy path)", () => {
      cy.get('[data-cy="set_form"]').invoke("removeClass", "notVisible");

      cy.get('[data-cy="set_form"]')
        .find('input[name="titleInput"]')
        .type("My Test Card Set");

      cy.get('[data-cy="set_form"]').submit();

      cy.contains("My Test Card Set").should("be.visible");
    });

    it("should show an error when submitting an empty title (unhappy path)", () => {
      cy.get('[data-cy="set_form"]').invoke("removeClass", "notVisible");

      cy.get('[data-cy="set_form"]').submit();

      cy.get(".error").should("be.visible");
      cy.get(".error").should("contain", "TITLE CANNOT BE EMPTY");
    });
  });

  describe("Add Card Form", () => {
    beforeEach(() => {
      cy.get('[data-cy="set_form"]').invoke("removeClass", "notVisible");
      cy.get('[data-cy="set_form"]')
        .find('input[name="titleInput"]')
        .type("Test Set for Cards");
      cy.get('[data-cy="set_form"]').submit();

      cy.contains("Test Set for Cards").click();
    });

    it("should successfully add a new card with valid input (happy path)", () => {
      cy.get('[data-cy="card_form"]')
        .parent()
        .invoke("removeClass", "notVisible");

      cy.get('[data-cy="card_form"]')
        .find('input[name="termInput"]')
        .type("Test Term");

      cy.get('[data-cy="card_form"]')
        .find('input[name="descriptionInput"]')
        .type("Test Description");

      cy.get('[data-cy="card_form"]').submit();

      cy.contains("Test Term").should("be.visible");
    });

    it("should show an error when submitting empty term (unhappy path)", () => {
      cy.get('[data-cy="card_form"]')
        .parent()
        .invoke("removeClass", "notVisible");

      cy.get('[data-cy="card_form"]')
        .find('input[name="descriptionInput"]')
        .type("Test Description");

      cy.get('[data-cy="card_form"]').submit();

      cy.get(".error").should("be.visible");
      cy.get(".error").should("contain", "TERM CANNOT BE EMPTY");
    });

    it("should show an error when submitting empty description (unhappy path)", () => {
      cy.get('[data-cy="card_form"]')
        .parent()
        .invoke("removeClass", "notVisible");

      cy.get('[data-cy="card_form"]')
        .find('input[name="termInput"]')
        .type("Test Term");

      cy.get('[data-cy="card_form"]').submit();

      cy.get(".error").should("be.visible");
      cy.get(".error").should("contain", "DESCRIPTION CANNOT BE EMPTY");
    });

    it("should show an error when submitting both empty inputs (unhappy path)", () => {
      cy.get('[data-cy="card_form"]')
        .parent()
        .invoke("removeClass", "notVisible");

      cy.get('[data-cy="card_form"]').submit();

      cy.get(".error").should("be.visible");
      cy.get(".error").should(
        "contain",
        "TERM AND DESCRIPTION CANNOT BE EMPTY"
      );
    });
  });
});
