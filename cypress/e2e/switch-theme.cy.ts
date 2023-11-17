describe('Theme switch', () => {
  it('change the theme', () => {
    cy.visit('/');
    cy.findByRole('button', { name: /switch to/i }).click();
    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        'http://localhost:3000': {
          'git-server-ui-theme': 'dark',
        },
      });
    });
    cy.findByRole('button', { name: /switch to/i }).click();
    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        'http://localhost:3000': {
          'git-server-ui-theme': 'light',
        },
      });
    });
    cy.findByRole('button', { name: /switch to/i }).click();
    cy.reload();
  });
});
