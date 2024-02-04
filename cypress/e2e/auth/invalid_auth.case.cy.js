const { faker } = require("@faker-js/faker");

describe('Negatif Case Registrasi & Login', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    });

    it('Kolom first & last name tidak diisi', () => {
        const randomEmail = faker.internet.email();
        cy.contains('Create an Account').click();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/');
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type('Inipassword123');
        cy.get('#password-confirmation').type('Inipassword123');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        // Menampilkan pesan error name
        cy.get('#firstname-error').should('be.visible');
        cy.contains('This is a required field.').should('be.visible');
    });

    it('Salah satu name tidak diisi', () => {
        const randomEmail = faker.internet.email();
        cy.contains('Create an Account').click();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/');
        cy.get('#firstname').type('Kelompok');
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type('Inipassword123');
        cy.get('#password-confirmation').type('Inipassword123');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        // Menampilkan pesan error name
        cy.get('#lastname-error').should('be.visible');
        cy.contains('This is a required field.').should('be.visible');
    });

    it('Kolom email tidak diisi', () => {
        cy.contains('Create an Account').click();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/');
        cy.get('#firstname').type('Kelompok');
        cy.get('#lastname').type('16');
        cy.get('#password').type('Inipassword123');
        cy.get('#password-confirmation').type('Inipassword123');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        // Menampilkan pesan error email
        cy.get('#email_address-error').should('be.visible');
        cy.contains('This is a required field.').should('be.visible');
    });

    it('Salah satu password tidak diisi', () => {
        const randomEmail = faker.internet.email();
        cy.contains('Create an Account').click();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/');
        cy.get('#firstname').type('Kelompok');
        cy.get('#lastname').type('16');
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type('Inipassword123');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        // Menampilkan pesan error password
        cy.get('#password-confirmation-error').should('be.visible');
        cy.contains('This is a required field.').should('be.visible');
    });

    it('Password tidak sesuai dengan ketentuan', () => {
        const randomEmail = faker.internet.email();
        cy.contains('Create an Account').click();
        cy.url('').should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/');
        cy.get('#firstname').type('Kelompok');
        cy.get('#lastname').type('16');
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type('password');
        cy.get('#password-confirmation').type('password');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        // Menampilkan pesan error minimum password 8 karakter, camel case, angka, dan spesial karakter
        cy.get('#password-error').should('be.visible');
        cy.contains('Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.').should('be.visible');
    });
});