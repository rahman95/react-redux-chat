describe('All Messages', () => {
  before(() => {
    cy.visitApp();
  });

  it('should be on correct page', () => {
    cy.contains('React Redux Chat').should('exist');
    cy.contains('All Messages').should('exist');
    cy.contains('Loading...').should('exist');
  });

  it('should be able to find correct first message', () => {
    cy.findAllByTestId('message').first().within(() => {
      cy.contains('Amanda Baker');
      cy.contains('Mauris lacinia sapien quis libero.');
      cy.contains('27 Feb 2017 13:47');
    });
  });

  it('should be able to scroll to the bottom', () => {
    cy.findByTestId('messages').scrollTo('bottom');
  });

  it('should be able to find correct last message', () => {
    cy.findAllByTestId('message').last().within(() => {
      cy.contains('Amanda Baker');
      cy.contains('Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.');
      cy.contains('24 Feb 2016 00:01');
    });
  });
});
