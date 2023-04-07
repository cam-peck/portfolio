// line below required due to jest-cypress -- see https://docs.cypress.io/guides/component-testing/faq#Cypress-Types-Conflict-with-Jest
/// <reference types="cypress" />

describe('Contact page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contact');
  });

  it('allows users to submit a "contact me" message', () => {
    cy.get('input[name="name"]').type('Brandon Sanderson');
    cy.get('input[name="email"]').type('brandonsanderson@thewheeoftime.net');
    cy.get('textarea[name="message"]').type(
      'And it shall come to pass that what men made shall be shattered, and the Shadow shall lie across the Pattern of the Age, and the Dark One shall once more lay his hand upon the world of man.',
    );
    cy.get('button[type="submit"]').click();
    cy.get('h2').should('exist').contains('Submit successful.');
  });

  it('renders the renders the error message when firebase is down', () => {
    // simulate server down
    cy.intercept('POST', '/api/firebase', { statusCode: 500 });

    // regular request
    cy.get('input[name="name"]').type('Brandon Sanderson');
    cy.get('input[name="email"]').type('brandonsanderson@thewheeoftime.net');
    cy.get('textarea[name="message"]').type(
      'And it shall come to pass that what men made shall be shattered, and the Shadow shall lie across the Pattern of the Age, and the Dark One shall once more lay his hand upon the world of man.',
    );
    cy.get('button[type="submit"]').click();
    cy.get('h2').should('exist').contains('Oops. We ran into an unexpected error.');
  });

  it('renders the renders the error message when user network is down', () => {
    // simulate network down
    cy.intercept('POST', '/api/firebase', { forceNetworkError: true });

    // regular request
    cy.get('input[name="name"]').type('Brandon Sanderson');
    cy.get('input[name="email"]').type('brandonsanderson@thewheeoftime.net');
    cy.get('textarea[name="message"]').type(
      'And it shall come to pass that what men made shall be shattered, and the Shadow shall lie across the Pattern of the Age, and the Dark One shall once more lay his hand upon the world of man.',
    );
    cy.get('button[type="submit"]').click();
    cy.get('h2').should('exist').contains('Oops. We ran into an unexpected error.');
  });
});
