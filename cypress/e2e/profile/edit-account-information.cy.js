describe('Edit Account Information', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })

    it('Login Account', () => {
      // Ambil nilai email dari variabel Cypress.env
      const registeredEmail = Cypress.env('registeredEmail');
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.contains('Sign In').click();
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
      cy.get('#email').type('user6@yopmail.com')
      cy.get('#pass').type('8@HKkdU!V!mJgBK{enter}')
      cy.get('#send2').click();
    });

    it('Edit Account', () => {
      // Ambil nilai email dari variabel Cypress.env
      const registeredEmail = Cypress.env('registeredEmail');
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.contains('Sign In').click();
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/');
      cy.get('#maincontent > div.columns > div.column.main > div.block.block-dashboard-info > div.block-content > div > div.box-actions > a.action.edit > span').click();
      cy.get('#firstname').type('User7')
      cy.get('#lastname').type('User7')
      cy.get('#form-validate > div > div.primary > button').click();
    });


});