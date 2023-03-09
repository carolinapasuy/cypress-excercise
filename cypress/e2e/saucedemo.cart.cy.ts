describe("Verifying Login Process for SauceDemo", () => {
    before(() => {
      cy.visit("https://www.saucedemo.com/");
    });
    it("Login should work for existing user.", () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();

        //Verificar que exista un elemento Sauce Labs Backpack
        cy.get('.inventory_item_name')
        .should('contain', 'Sauce Labs Backpack');

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
            .should('have.text', 'Add to cart')
            .should('have.class', 'btn_primary')

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        //Verificar que el boton despues de darle click aparezca como remove
        cy.get('[data-test="remove-sauce-labs-backpack"]')
            .should('have.text', 'Remove')

        //Verificar que exista un elemento Sauce Labs Onesie
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
            .should('have.text', 'Add to cart')
            .should('have.class', 'btn_primary')

        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        
        //Verificar que el boton despues de darle click aparezca como remove
        cy.get('[data-test="remove-sauce-labs-onesie"]')
        .should('have.text', 'Remove')

        //Verificar que hayan 2 productos en el carro
        cy.get('.shopping_cart_badge')
        .should('have.text', '2');

        cy.get('.shopping_cart_link').click();

        //Verificar que hayan 2 productos en la lista
        cy.get('.cart_list .cart_item')
        .should('have.length', 2);

        //Verificar que exista un elemento Sauce Labs Backpack en la lista
        cy.get('.inventory_item_name')
        .should('contain', 'Sauce Labs Backpack');

        //Verificar que exista un elemento Sauce Labs Onesie en la lista
        cy.get('.inventory_item_name')
        .should('contain', 'Sauce Labs Onesie');
    });


  });