describe('Dashboard', () => {
  it('send to config page on first time', () => {
    cy.visit('/');
    cy.findByText('Settings').should('exist');
    cy.findByLabelText(/root path/i).type('./repos');
    cy.findByRole('button', { name: /save/i }).click();
    cy.findByRole('link', { name: /dashboard/i }).click();
    cy.findByText('My Git Server');
  });
  // it.only('create a new repo', () => {
  //   const repo = 'Testing repo';
  //   cy.visit('/');
  //   cy.findByText(/new repo/i).click();
  //   cy.findByText(/Create a new repo/i);

  //   cy.findByLabelText(/repo name/i).type(repo);
  //   cy.findByRole('button', { name: /create repo/i }).click();
  //   cy.findByText(repo);
  // });
});
