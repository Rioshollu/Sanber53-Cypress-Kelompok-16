class registPage {
    firstName = '#firstname'
    lastName = '#lastname'
    mail = '#email_address'
    pass = '#password'
    kPass = '#password-confirmation'
    regist_btn = '#form-validate > .actions-toolbar > div.primary > .action'

    clickRegist() {
        cy.contains('Create an Account').click();
    }
}

export default new registPage