describe('User Messages', () => {
  before(() => {
    cy.visitApp();
  });

  it('should be on correct page', () => {
    cy.contains('React Redux Chat').should('exist');
    cy.contains('All Messages').should('exist');
    cy.contains('Loading...').should('exist');
  });

  it('should be able to click on user', () => {
    cy.contains('Amanda Baker').click();
  });

  it('should now see correct title', () => {
    cy.contains('User Messages');
  });

  it('should be able to find correct first and last message', () => {
    cy.findAllByTestId('message').first().within(() => {
      cy.contains('Amanda Baker');
      cy.contains('Mauris lacinia sapien quis libero.');
      cy.contains('27 Feb 2017 13:47');
    });

    cy.findAllByTestId('message').last().within(() => {
      cy.contains('Amanda Baker');
      cy.contains('Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.');
      cy.contains('24 Feb 2016 00:01');
    });
  });

  it('should be able to go back to all messages', () => {
    cy.findByRole('button').click();
  });

  it('should now see correct title', () => {
    cy.contains('All Messages');
  });
});
