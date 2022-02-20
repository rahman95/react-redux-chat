import '@testing-library/cypress/add-commands'

Cypress.Commands.add('visitApp', () => {
  console.log({ env: process.env, url: process.env.DEPLOY_URL })
  const url = process.env.DEPLOY_URL || 'localhost:3000'
  cy.visit(url)
})
