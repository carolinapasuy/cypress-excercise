import { LoginPage,InventoryPage,ShoppingCartPage } from "../page/index"
let loginPage:LoginPage;
let inventoryPage:InventoryPage;
let shoppingCartPage:ShoppingCartPage;

describe("Verifying Login Process for SauceDemo", () => {
    before(() => {
      cy.visit("https://www.saucedemo.com/");
      loginPage= new LoginPage();
      inventoryPage= new InventoryPage();
      shoppingCartPage= new ShoppingCartPage();
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
        inventoryPage.verifiedshoppingCartBadge().should(
            'have.text',
             '2');

        inventoryPage.clickshoppingCartBadgeLink()

        //Verificar que hayan 2 productos en la lista
        shoppingCartPage.getlistItem().should(
            'have.length', 
            2);

        //Verificar que exista un elemento Sauce Labs Backpack en la lista
        shoppingCartPage.getinventoryNameItem().should(
            'contain.text', 
            'Sauce Labs Backpack');

        //Verificar que exista un elemento Sauce Labs Onesie en la lista
        shoppingCartPage.getinventoryNameItem().should(
            'contain', 
            'Sauce Labs Onesie');
    });


  });