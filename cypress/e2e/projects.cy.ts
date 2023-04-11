// line below required due to jest-cypress conflict -- see https://docs.cypress.io/guides/component-testing/faq#Cypress-Types-Conflict-with-Jest
/// <reference types="cypress" />

import projectData from '../../components/carousel/project-data';

describe('Projects Page', () => {
  beforeEach(() => {
    cy.viewport(1200, 948);
    cy.visit('http://localhost:3000/projects');
  });

  describe('Arrow Tests', () => {
    it('The carousel advances when the user clicks the forward arrow', () => {
      cy.get('[data-testid=dot-0]').should('have.class', 'fa-solid');
      cy.get('[data-testid=forward-arrow]').click();
      cy.get('[data-testid=dot-0]').should('have.class', 'fa-regular');
      cy.get('[data-testid=dot-1]').should('have.class', 'fa-solid');
      cy.get('[data-testid=card-github-link]').should('have.attr', 'href', projectData[1].github);
    });

    it('The carousel advances when the user clicks the backward arrow', () => {
      cy.get('[data-testid=forward-arrow]').click();
      cy.get('[data-testid=dot-1]').should('have.class', 'fa-solid');
      cy.get('[data-testid=backward-arrow]').click();
      cy.get('[data-testid=dot-1]').should('have.class', 'fa-regular');
      cy.get('[data-testid=dot-0]').should('have.class', 'fa-solid');
      cy.get('[data-testid=card-github-link]').should('have.attr', 'href', projectData[0].github);
    });

    it("Doesn't break when the carousel is at the beginning or the end", () => {
      // get to the final dot
      cy.get('[data-testid=forward-arrow]').click();
      cy.get('[data-testid=forward-arrow]').click();
      cy.get('[data-testid=forward-arrow]').click();
      cy.get('[data-testid=forward-arrow]').click();
      cy.get('[data-testid=dot-4]').should('have.class', 'fa-solid');

      // test for forward
      cy.get('[data-testid=forward-arrow]').click();
      cy.get('[data-testid=dot-4]').should('have.class', 'fa-regular');
      cy.get('[data-testid=dot-0]').should('have.class', 'fa-solid');
      cy.get('[data-testid=card-github-link]').should('have.attr', 'href', projectData[0].github);

      // test for backward
      cy.get('[data-testid=backward-arrow]').click();
      cy.get('[data-testid=dot-4]').should('have.class', 'fa-solid');
      cy.get('[data-testid=dot-0]').should('have.class', 'fa-regular');
      cy.get('[data-testid=card-github-link]').should('have.attr', 'href', projectData[4].github);
    });

    describe('Dots Tests', () => {
      it('The carousel moves to the approriate slide when a dot is clicked', () => {
        // Pomodoro Timer //
        cy.get('[data-testid=dot-3]').click().should('have.class', 'fa-solid');
        cy.get('[data-testid=card-github-link]').should('have.attr', 'href', projectData[3].github);
        // Mission Beepossible //
        cy.get('[data-testid=dot-4]').click().should('have.class', 'fa-solid');
        cy.get('[data-testid=card-github-link]').should('have.attr', 'href', projectData[4].github);
        // AWS Call Center //
        cy.get('[data-testid=dot-0]').click().should('have.class', 'fa-solid');
        cy.get('[data-testid=card-github-link]').should('have.attr', 'href', projectData[0].github);
        // RunningFuze //
        cy.get('[data-testid=dot-1]').click().should('have.class', 'fa-solid');
        cy.get('[data-testid=card-github-link]').should('have.attr', 'href', projectData[1].github);
        // ACNH Tracker //
        cy.get('[data-testid=dot-2]').click().should('have.class', 'fa-solid');
        cy.get('[data-testid=card-github-link]').should('have.attr', 'href', projectData[2].github);
      });
    });
  });
});
