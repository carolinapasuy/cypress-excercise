class InventoryPage {
    private inventoryItem: string;
    private addButtonNameItem: string;
    private addButtonItem: string;
    private removeButtonNameItem: string;
    private shoppingCartBadge: string;
    private shoppingCartBadgeLink: string;

    constructor() {
        this.inventoryItem = ".inventory_item_name";
        this.addButtonNameItem = "";
        this.addButtonItem = "";
        this.removeButtonNameItem = "";
        this.shoppingCartBadge = ".shopping_cart_badge";
        this.shoppingCartBadgeLink = ".shopping_cart_link";
    }

    public getInventoryItem() {
        return cy.get(this.inventoryItem);
    }

    public verifiedSauceLabsBackpack() {
        this.addButtonNameItem="[data-test='add-to-cart-sauce-labs-backpack']";
        return cy.get(this.addButtonNameItem);
    }

    public verifiedSauceLabsBackpackButton() {
        this.addButtonItem="[data-test='add-to-cart-sauce-labs-backpack']";
        cy.get(this.addButtonItem).click();
    }

    public verifiedSauceLabsOnesie() {
        this.addButtonNameItem="[data-test='add-to-cart-sauce-labs-onesie']";
        return cy.get(this.addButtonNameItem);
    }

    public verifiedSauceLabsOnesieButton() {
        this.addButtonItem="[data-test='add-to-cart-sauce-labs-onesie']";
        cy.get(this.addButtonItem).click();
    }

    public verifiedRemoveButtonSauceLabsBackpack() {
        this.removeButtonNameItem="[data-test='remove-sauce-labs-backpack']";
        return cy.get(this.removeButtonNameItem);
    }

    public verifiedRemoveButtonSauceLabsOnesie() {
        this.removeButtonNameItem="[data-test='remove-sauce-labs-onesie']";
        return cy.get(this.removeButtonNameItem);
    }
}

export { InventoryPage }