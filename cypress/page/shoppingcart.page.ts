class ShoppingCartPage {
    private listItem: string;
    private inventoryNameItem: string;

    constructor() {
        this.listItem = ".cart_list .cart_item";
        this.inventoryNameItem = ".inventory_item_name";
    }
    
    public getlistItem() {
        return cy.get(this.listItem);
    }
    public getinventoryNameItem() {
        return cy.get(this.inventoryNameItem);
    }
}

export { ShoppingCartPage }