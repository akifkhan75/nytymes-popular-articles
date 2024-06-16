describe('NY Times Most Popular Articles', () => {
    it('fetches and displays articles', () => {
      cy.visit('/');
      cy.contains('NY Times Most Popular Articles');
      cy.contains('Article 1').click();
      cy.contains('Author 1');
      cy.contains('2021-01-01');
    });
  });