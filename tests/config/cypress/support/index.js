import '@testing-library/cypress/add-commands'

Cypress.Commands.add('visitApp', () => {
  const url = Cypress.env('deploy_url') || 'localhost:3000'
  cy.visit(url)
})
