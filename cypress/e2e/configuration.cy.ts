describe('Configuration flow', () => {
  it('should get and save configuration', () => {
    cy.visit('/config');
    cy.findByText('Configuration settings').should('exist');
    cy.findByLabelText(/default branch/i).should('have.value', 'main');
    cy.findByLabelText(/root path/i).type('./');
    cy.findByRole('button').click();
    cy.reload();
    cy.findByLabelText(/root path/i).should('have.value', './');
  });
});
