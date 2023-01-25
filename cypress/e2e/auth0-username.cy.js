describe('Username/Password login via auth0', () => {
  it('logs in via Username/Password', () => {
    cy.visit('/');

    cy.origin(Cypress.env('AUTH0_DOMAIN'), () => {
      cy.get('input[type=text]').type(Cypress.env('AUTH0_USERNAME'));
      cy.get('input[type=password]').type(Cypress.env('AUTH0_PASSWORD'), {log: false});
      cy.get('form').first().submit();
    });

    cy.get('[data-cy="user-name"]').invoke('text').should('equal', Cypress.env('AUTH0_USERNAME'));
    cy.get('[data-cy="user-email"]').invoke('text').should('equal', Cypress.env('AUTH0_USERNAME'));
  });
});
