describe('Покупка аватара', function () {


    it('e2e Покупка аватара', function () {
        cy.visit('https://pokemonbattle.ru/login'); // Поситить сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввести правильный логин
        cy.get('#password').type('USER_PASSWORD'); // Ввести правильный пароль
        cy.get('.auth__button').click(); // Нажать войти
        cy.get(':nth-child(2) > .gradient').should('be.visible');
        cy.get('.pokemon__title').should('be.visible'); //  Проверить нужный текст
        cy.get('#search-input').should('be.visible'); // Проверить, что окно поиска виден для пользователя
        cy.get('.header__container > .header__id').click(); // Нажать войти в личный профель
        cy.get('.title-single__title').should('be.visible'); // Проверить имя тренера
        cy.get('.title-single__title').should('be.visible'); // Проверить видно имя тренера
        cy.get('[href="/shop"] > .history-info').should('be.visible'); // Проверить название кнопки смена аватара
        cy.get('[href="/shop"]').click(); // Нажать войти в магазин покупки аватара
        cy.get('.pokemon__title').should('be.visible'); // Видим надпись магазин
        cy.get('.available > button').first().click({ force: true }); // Покупаем первый доступный аватар
        cy.get('.pay__payform-v2').should('be.visible'); // Видно окно покупки
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('2201 3820 0000 0062'); // Вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/34'); // Вводим срок годности карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Вводим код 
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Myznikov Igor'); // Вводим имя
        cy.get('.pay-btn').first().click({ force: true }); // Нажимаем купить аватар
        cy.get('#cardnumber').type('56456'); // Вводим код проверки
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible'); // Пользователь видит надпись об успешной покупки

    })

})