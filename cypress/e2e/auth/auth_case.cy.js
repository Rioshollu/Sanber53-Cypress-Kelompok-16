import { faker } from '@faker-js/faker';
import registPage from '../../support/pageObject/registPage';
import loginPage from '../../support/pageObject/loginPage';

describe('Positif Case Registrasi & Login', () => {
    beforeEach(() => {
        cy.visit('')
    });
    
    it('Membuat account', () => {
        // Membuat email random
        const randomEmail = faker.internet.email();
        registPage.clickRegist();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/');
        cy.get(registPage.firstName).type('Kelompok');
        cy.get(registPage.lastName).type('16');
        cy.get(registPage.mail).type(randomEmail);
        cy.get(registPage.pass).type('Inipassword123');
        cy.get(registPage.kPass).type('Inipassword123');
        cy.get(registPage.regist_btn).click();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/');
        // Menyimpan email ke dalam variabel Cypress
        cy.wrap(randomEmail).as('registeredEmail');

        // Menyimpan email random & password
        Cypress.env('registeredEmail', randomEmail);
        Cypress.env('registeredPassword', 'Inipassword123');
    });

    it('Login Account', () => {
        // Ambil nilai email dari variabel Cypress.env
        const registeredEmail = Cypress.env('registeredEmail');
        loginPage.clicklogin();
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
        cy.get(loginPage.mail).type(registeredEmail);
        cy.get(loginPage.pass).type('Inipassword123');
        cy.get(loginPage.login_btn).click();
    });
});