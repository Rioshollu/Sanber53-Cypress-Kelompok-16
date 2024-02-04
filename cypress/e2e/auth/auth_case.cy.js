import { faker } from '@faker-js/faker';

describe('Positif Case Registrasi & Login', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
    });
    
    it('Membuat account', () => {
        const randomEmail = faker.internet.email();
        cy.contains('Create an Account').click();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/');
        cy.get('#firstname').type('Kelompok');
        cy.get('#lastname').type('16');
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type('Inipassword123');
        cy.get('#password-confirmation').type('Inipassword123');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/');
        cy.wrap(randomEmail).as('registeredEmail');

        // Menyimpan email random & password
        Cypress.env('registeredEmail', randomEmail);
        Cypress.env('registeredPassword', 'Inipassword123');
    });

    it('Login Account', () => {
        // Ambil nilai email dari variabel Cypress.env
        const registeredEmail = Cypress.env('registeredEmail');
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.contains('Sign In').click();
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
        cy.get('#email').type(registeredEmail);
        cy.get('#pass').type('Inipassword123');
        cy.get('#send2').click();
    });
});