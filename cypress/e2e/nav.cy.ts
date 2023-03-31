// line below required due to jest-cypress conflict -- see https://docs.cypress.io/guides/component-testing/faq#Cypress-Types-Conflict-with-Jest
/// <reference types="cypress" />

describe('Main Navigation', () => {
  it('should navigate to the about page', () => {
    // should start from the index (home) page //
    cy.visit('http://localhost:3000/');

    // Find a link with the attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/about');
  });

  it('should navigate to the projects page', () => {
    // should start from the index (home) page //
    cy.visit('http://localhost:3000/');

    // Find a link with the attribute containing "projects" and click it
    cy.get('a[href*="projects"]').click();

    // The new url should include "/projects"
    cy.url().should('include', '/projects');
  });

  it('should navigate to the contact page', () => {
    // should start from the index (home) page //
    cy.visit('http://localhost:3000/');

    // Find a link with the attribute containing "contact" and click it
    cy.get('a[href*="contact"]').click();

    // The new url should include "/contact"
    cy.url().should('include', '/contact');
  });

  it('should navigate back to the home page', () => {
    // should start from the index (home) page //
    cy.visit('http://localhost:3000/');

    // Find a link with the attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/about');

    // Find a link with the attribute containing "home" and click it
    cy.get('a[id*="home"]').click();

    // The new url should include "/"
    cy.url().should('include', '/');
  });
});

describe('Drawer Navigation', () => {
  beforeEach(() => {
    cy.viewport(550, 750);
  });
  it('should navigate to the about page', () => {
    // click the hamburger menu
    // cy.get('[id=hamburger-menu]').click();

    // should start from the index (home) page //
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid=hamburger-menu]').click();

    // Find a link with the attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/about');
  });

  it('should navigate to the projects page', () => {
    // should start from the index (home) page //
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid=hamburger-menu]').click();

    // Find a link with the attribute containing "projects" and click it
    cy.get('a[href*="projects"]').click();

    // The new url should include "/projects"
    cy.url().should('include', '/projects');
  });

  it('should navigate to the contact page', () => {
    // should start from the index (home) page //
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid=hamburger-menu]').click();

    // Find a link with the attribute containing "contact" and click it
    cy.get('a[href*="contact"]').click();

    // The new url should include "/contact"
    cy.url().should('include', '/contact');
  });

  it('should navigate back to the home page', () => {
    // should start from the index (home) page //
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid=hamburger-menu]').click();

    // Find a link with the attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/about');

    cy.get('[data-testid=hamburger-menu]').click();

    // Find a link with the attribute containing "home" and click it
    cy.get('a[id*="home"]').click();

    // The new url should include "/"
    cy.url().should('include', '/');
  });
});

export {};
