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

    it('Edit Address', () => {
      // Ambil nilai email dari variabel Cypress.env
      const registeredEmail = Cypress.env('registeredEmail');
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.contains('Sign In').click();
      cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/');
      cy.get('#maincontent > div.columns > div.column.main > div.block.block-dashboard-addresses > div.block-title > a > span').click();
      cy.get('#firstname').type('User7')
      cy.get('#lastname').type('User7')
      cy.get('#company').type('PT.ABC')
      cy.get('#telephone').type('628456565463654')
      cy.get('#street_1').type('Bandung')
      cy.get('#street_2').type('Cimahi')
      cy.get('#street_3').type('CImahi Utara')
      cy.get('#city').type('Bandung')
      cy.get('#region_id').type('Bandung')
      cy.get('#zip').type('956467')
      cy.get('#country').type('Indonesia')
      cy.get('#form-validate > div > div.primary > button > span').click();
    });


});