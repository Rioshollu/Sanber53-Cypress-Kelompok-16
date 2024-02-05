class loginPage {
    mail  = '#email'
    pass = '#pass'
    login_btn = '#send2'
    clicklogin(){
        cy.contains('Sign In').click();
    }
}

export default new loginPage