import '@testing-library/cypress/add-commands';

Cypress.Commands.add('visitApp', () => {
  const url = process.env.DEPLOY_URL || 'localhost:3000'
	cy.visit(url)
})
