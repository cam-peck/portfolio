// line below required due to jest-cypress conflict -- see https://docs.cypress.io/guides/component-testing/faq#Cypress-Types-Conflict-with-Jest
/// <reference types="cypress" />

describe('Home page', () => {
  it('Should navigate to my GitHub page', () => {
    // should start from the index (home) page //

    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        cy.stub(win, 'open');
      },
    });

    // Find a link with the attribute containing "about" and click it
    cy.get('a[href*="https://github.com/cam-peck"]').click();

    // The new url should include "/about"
    cy.window().its('open').should('be.called');
  });

  it('Should navigate to my LinkedIn page', () => {
    // should start from the index (home) page //
    cy.visit('http://localhost:3000/');

    // Find a link with the attribute containing "projects" and click it
    cy.get('a[href*="https://www.linkedin.com/in/cameronjpeck/"]').click();

    // The new url should include "/projects"
    cy.url().should('include', '/linkedin.com/in/cameronjpeck');
  });
});
