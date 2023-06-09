// line below required due to jest-cypress conflict -- see https://docs.cypress.io/guides/component-testing/faq#Cypress-Types-Conflict-with-Jest
/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Should navigate to my GitHub page', () => {
    // Find a link with the attribute containing "about" and ensure it opens in a new tab
    cy.get('a[href*="https://github.com/cam-peck"]').should('have.attr', 'target', '_blank');
  });

  it('Should navigate to my LinkedIn page', () => {
    // Find a link with the attribute containing "projects" and click it
    cy.get('a[href*="https://www.linkedin.com/in/cameronjpeck/"]').should('have.attr', 'target', '_blank');
  });
});
