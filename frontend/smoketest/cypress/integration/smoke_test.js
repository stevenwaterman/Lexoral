/// <reference types="Cypress" />
describe('Smoke Test', () => {
  it('Can support a user logging in and accessing a transcript', () => {
    cy.visit("/");

    cy.get("#signin").click();
    cy.url().should("include", "dashboard").should("include", "login");

    cy.get("#email").type("stage.test.user@lexoral.com");
    cy.get("#password").type(`${Cypress.env("TEST_USER_PASSWORD")}{enter}`);

    cy.get(".table li:nth-child(2) a :first-child").click();
    cy.url().should("include", "editor");
    cy.contains("congrats", {timeout: 20_000});
  })
})
