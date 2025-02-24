describe('Проверка авторизации', function () {
    
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // Поситить сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //  Проверить нужный текст
        cy.get('#messageHeader').should('be.visible'); //  Проверить нужный текст, что он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверить наличие крестика на сайте и что он виден пользователю

    })
        
    
    it('Восстановления пароля', function () { 
        cy.visit('https://login.qa.studio'); // Поситить сайт
        cy.get('#forgotEmailButton').click(); // Нажать забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввести имейл
        cy.get('#restoreEmailButton').click(); // Нажать отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //  Проверка, что получили нужный текст
        cy.get('#messageHeader').should('be.visible'); //  Проверить нужный текст, что он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверить наличие крестика на сайте и что он виден пользователю

    })  

    it('Неправильный пароль', function () {
        
        cy.visit('https://login.qa.studio'); // Поситить сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
        cy.get('#pass').type('iLoveqas'); // Ввести неправильный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //  Проверить нужный текст
        cy.get('#messageHeader').should('be.visible'); //  Проверить нужный текст, что он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверить наличие крестика на сайте и что он виден пользователю  
})


it('Неправильный логин', function () {
        
    cy.visit('https://login.qa.studio'); // Поситить сайт
    cy.get('#mail').type('german@dolov.ru'); // Ввести неправильный логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
    cy.get('#loginButton').click(); // Нажать войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); //  Проверить нужный текст
    cy.get('#messageHeader').should('be.visible'); //  Проверить нужный текст, что он виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверить наличие крестика на сайте и что он виден пользователю  
})


it('Проверка валидации', function () {
        
    cy.visit('https://login.qa.studio'); // Поситить сайт
    cy.get('#mail').type('germandolnikov.ru'); // Ввести логин без @
    cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
    cy.get('#loginButton').click(); // Нажать войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //  Проверить нужный текст
    cy.get('#messageHeader').should('be.visible'); //  Проверить нужный текст, что он виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверить наличие крестика на сайте и что он виден пользователю  
})


it('Проверка на строчные буквы', function () {
        
    cy.visit('https://login.qa.studio'); // Поситить сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввести логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
    cy.get('#loginButton').click(); // Нажать войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); //  Проверить нужный текст
    cy.get('#messageHeader').should('be.visible'); //  Проверить нужный текст, что он виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверить наличие крестика на сайте и что он виден пользователю  
})

})