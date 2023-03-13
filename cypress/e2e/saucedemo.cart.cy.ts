import { LoginPage,InventoryPage } from "../page/index"
let loginPage:LoginPage;
let inventoryPage:InventoryPage;

describe("Verifying Login Process for SauceDemo", () => {
    before(() => {
      cy.visit("https://www.saucedemo.com/");
      loginPage= new LoginPage();
      inventoryPage= new InventoryPage();
    });
    it("Login should work for existing user.", () => {
       
        loginPage.login("standard_user","secret_sauce")

        //Verificar que exista un elemento Sauce Labs Backpack
        inventoryPage.getInventoryItem().should(
            'contain.text',
            'Sauce Labs Backpack'
        )

        inventoryPage.verifiedSauceLabsBackpack().should(
            'have.text', 'Add to cart')
            .should(
            'have.class', 'btn_primary')

        inventoryPage.verifiedSauceLabsBackpackButton()

        //Verificar que el boton despues de darle click aparezca como remove
        inventoryPage.verifiedRemoveButtonSauceLabsBackpack().should(
            'have.text', 
            'Remove')
    
        //Verificar que exista un elemento Sauce Labs Onesie
        inventoryPage.verifiedSauceLabsOnesie().should(
            'have.text', 'Add to cart')
            .should(
            'have.class', 'btn_primary')

        inventoryPage.verifiedSauceLabsOnesieButton()
        
        //Verificar que el boton despues de darle click aparezca como remove
        inventoryPage.verifiedRemoveButtonSauceLabsOnesie().should(
            'have.text', 
            'Remove')

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