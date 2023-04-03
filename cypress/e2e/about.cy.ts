// line below required due to jest-cypress conflict -- see https://docs.cypress.io/guides/component-testing/faq#Cypress-Types-Conflict-with-Jest
/// <reference types="cypress" />

describe('About page', () => {
  beforeEach(() => {
    cy.viewport(550, 750);
  });

  it('User can grab the image and a grab cursor appears.', () => {
    // should start from the index (home) page //

    cy.visit('http://localhost:3000/about');

    // Find a link with the attribute containing "about" and ensure it opens in a new tab
    cy.get('[id="about-me-dragbox"]').trigger('mousedown').should('have.class', 'active:cursor-grabbing');
  });

  it('User can scroll the image to the right to see hidden content.', () => {
    // should start from the index (home) page //

    cy.visit('http://localhost:3000/about');

    // Find a link with the attribute containing "about" and ensure it opens in a new tab
    cy.get('[id="about-me-dragbox"]').scrollTo('right').its('scrollLeft').should('not.equal', 0);
  });
});
