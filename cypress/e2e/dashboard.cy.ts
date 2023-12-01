describe('Dashboard', () => {
  it('send to config page on first time', () => {
    cy.visit('/');
    cy.findByText('Settings').should('exist');
    cy.findByLabelText(/root path/i).type('./repos');
    cy.findByRole('button', { name: /save/i }).click();
    cy.findByRole('link', { name: /dashboard/i }).click();
    cy.findByText('My Git Server');
  });
  it('create a new repo', () => {
    const repo = 'Testing repo';
    const repoAfterName = repo.toLowerCase().replaceAll(' ', '-');
    cy.visit('/');
    cy.findByText(/new repo/i).click();
    cy.findByText(/Create a new repo/i);

    cy.findByLabelText(/repo name/i).type(repo);
    cy.findByRole('button', { name: /create repo/i }).click();
    cy.findByText(repoAfterName);

    cy.findByRole('button', { name: `delete repo ${repoAfterName}` }).click();
    cy.findByRole('button', {
      name: `confirm delete repo ${repoAfterName}`,
    }).click();
    cy.findByText('No repos founds');
  });
});
