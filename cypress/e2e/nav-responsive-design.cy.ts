// line below required due to jest-cypress conflict -- see https://docs.cypress.io/guides/component-testing/faq#Cypress-Types-Conflict-with-Jest
/// <reference types="cypress" />

describe('Navigation Responsive Design', () => {
  it('should navigate to the about page', () => {
    // should start from the index (home) page //
    cy.visit('http://localhost:3000/');

    // Find a link with the attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/about');
  });
});

export {};
