



// Item class without quantity property, maxQuantity is handled by InventoryItem
export class Item {
    constructor(data) {
        this.name = data.name;
        this.description = data.description;
        this.maxQuantity = data.maxQuantity || 1;  // Default to 1 if maxQuantity is not provided
    }
}

// InventoryItem helper class to track item quantities
export class InventoryItem {
    constructor(item) {
        this.item = item;  // Store the actual Item object
        this.quantity = 1;  // Default to 1 if quantity is not provided
    }

    // Increment quantity if below maxQuantity
    increment() {
        if (this.quantity < this.item.maxQuantity) {
            this.quantity++;
        }
    }

    // Decrement quantity
    decrement() {
        if (this.quantity > 0) {
            this.quantity--;
        }
    }
}