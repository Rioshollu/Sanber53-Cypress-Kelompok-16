describe('Edit Account Information', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/')

    cy.contains("type").click('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link');
     cy.url().should("include", "/commands/actions")
     cy.get(".action-email")
       .type("javier@yopmail.com")
       .should("have.value", "javier@yopmail.com");
  })
})