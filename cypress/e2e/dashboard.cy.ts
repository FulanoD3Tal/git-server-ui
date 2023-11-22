describe('Dashboard', () => {
  it('send to config page on first time', () => {
    cy.visit('/');
    cy.findByText('Configuration settings').should('exist');
    cy.findByLabelText(/root path/i).type('./repos');
    cy.findByRole('button', { name: /save/i }).click();
    cy.findByRole('link', { name: /dashboard/i }).click();
    cy.findByText('My Git Server');
  });
});
