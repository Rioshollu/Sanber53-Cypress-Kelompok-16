const { faker } = require("@faker-js/faker");
import registPage from "../../support/pageObject/registPage";
import loginPage from "../../support/pageObject/loginPage";

describe('Negatif Case Registrasi & Login', () => {
    beforeEach(() => {
        cy.visit('')
    });

    it('Kolom first & last name tidak diisi', () => {
        // Membuat email random
        const randomEmail = faker.internet.email();
        registPage.clickRegist();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/');
        cy.get(registPage.mail).type(randomEmail);
        cy.get(registPage.pass).type('Inipassword123');
        cy.get(registPage.kPass).type('Inipassword123');
        cy.get(registPage.regist_btn).click();
        // Menampilkan pesan error name
        cy.get('#firstname-error').should('be.visible');
        cy.contains('This is a required field.').should('be.visible');
    });

    it('Salah satu name tidak diisi', () => {
        // Membuat email random
        const randomEmail = faker.internet.email();
        registPage.clickRegist();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/');
        cy.get(registPage.firstName).type('Kelompok');
        cy.get(registPage.mail).type(randomEmail);
        cy.get(registPage.pass).type('Inipassword123');
        cy.get(registPage.kPass).type('Inipassword123');
        cy.get(registPage.regist_btn).click();
        // Menampilkan pesan error name
        cy.get('#lastname-error').should('be.visible');
        cy.contains('This is a required field.').should('be.visible');
    });

    it('Kolom email tidak diisi', () => {
        registPage.clickRegist();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/');
        cy.get(registPage.firstName).type('Kelompok');
        cy.get(registPage.lastName).type('16');
        cy.get(registPage.pass).type('Inipassword123');
        cy.get(registPage.kPass).type('Inipassword123');
        cy.get(registPage.regist_btn).click();
        // Menampilkan pesan error email
        cy.get('#email_address-error').should('be.visible');
        cy.contains('This is a required field.').should('be.visible');
    });

    it('Salah satu password tidak diisi', () => {
        // Membuat email random
        const randomEmail = faker.internet.email();
        registPage.clickRegist();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/');
        cy.get(registPage.firstName).type('Kelompok');
        cy.get(registPage.lastName).type('16');
        cy.get(registPage.mail).type(randomEmail);
        cy.get(registPage.pass).type('Inipassword123');
        cy.get(registPage.regist_btn).click();
        // Menampilkan pesan error password
        cy.get('#password-confirmation-error').should('be.visible');
        cy.contains('This is a required field.').should('be.visible');
    });

    it('Password tidak sesuai dengan ketentuan', () => {
        // Membuat email random
        const randomEmail = faker.internet.email();
        registPage.clickRegist();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/');
        cy.get(registPage.firstName).type('Kelompok');
        cy.get(registPage.lastName).type('16');
        cy.get(registPage.mail).type(randomEmail);
        cy.get(registPage.pass).type('password');
        cy.get(registPage.kPass).type('password');
        cy.get(registPage.regist_btn).click();
        // Menampilkan pesan error minimum password 8 karakter, camel case, angka, dan spesial karakter
        cy.get('#password-error').should('be.visible');
        cy.contains('Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.').should('be.visible');
    });

    it('Negatif Case Login - username tidak terdaftar', () => {
        loginPage.clicklogin();
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
        cy.get(loginPage.mail).type('rio@gmail.com');
        cy.get(loginPage.pass).type('Inipassword123');
        cy.get(loginPage.login_btn).click();
        // Menampilkan pesan error email tidak terdaftar
        cy.get('.message-error').should('be.visible');
        cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible');
    });

    it('Negatif Case Login - password salah', () => {
        // Membuat email random
        const randomEmail = faker.internet.email();
        loginPage.clicklogin()
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
        cy.get(loginPage.mail).type(randomEmail);
        cy.get(loginPage.pass).type('Inipassword123');
        cy.get(loginPage.login_btn).click();
        // Menampilkan pesan error password salah
        cy.get('.message-error').should('be.visible');
        cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later').should('be.visible');
    });
});