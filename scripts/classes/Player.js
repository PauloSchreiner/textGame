import { Item, InventoryItem } from './Item.js';
import { Fixture } from './Fixture.js';
import { Location } from './Location.js';  


// Player class with updated inventory system
export class Player {
    constructor(name, startingLocation) {
        this.name = name;
        this.location = startingLocation;  // Location object
        this.inventory = [];  // Store InventoryItem objects
        this.health = 100;  // Optional: starting health
    }

    // Method to print player's status (e.g., inventory, location, health)
    status() {
        const inventoryList = this.inventory.map(i => `${i.item.name} x${i.quantity}`).join(', ') || 'No items in inventory';
        return `Player: ${this.name}\nLocation: ${this.location.name}\nHealth: ${this.health}\nInventory: ${inventoryList}`;
    }

    // Method to move to a new location
    moveTo(newLocation) {
        this.location = newLocation;
        return `You have moved to ${newLocation.name}.`;
    }

    // Method to pick up an item and add it to the inventory
    pickUpItem(item) {
        // Check if the item already exists in inventory
        const existingInventoryItem = this.inventory.find(i => i.item.name === item.name);
        
        if (existingInventoryItem) {
            // If the item exists and quantity is below maxQuantity, increment the quantity
            if (existingInventoryItem.quantity < item.maxQuantity) {
                existingInventoryItem.increment();
                return `${item.name} quantity increased.`;
            } else {
                return `${item.name} has reached its maximum quantity and cannot be added.`;
            }
        } else {
            // Otherwise, add the new item to the inventory
            this.inventory.push(new InventoryItem(item));
            return `${item.name} has been added to your inventory.`;
        }
    }

    // Method to remove an item from the inventory (if it exists)
    removeItem(item) {
        const index = this.inventory.findIndex(i => i.item.name === item.name);
        if (index !== -1) {
            const inventoryItem = this.inventory[index];
            inventoryItem.decrement();
            if (inventoryItem.quantity <= 0) {
                // If quantity reaches 0, remove the item from inventory
                this.inventory.splice(index, 1);
            }
            return `${item.name} has been removed from your inventory.`;
        }
        return `You don't have ${item.name} in your inventory.`;
    }

    // Method to use an item (e.g., consume or equip)
    useItem(itemName) {
        const inventoryItem = this.inventory.find(i => i.item.name === itemName);
        if (inventoryItem) {
            return `You use the ${inventoryItem.item.name}: ${inventoryItem.item.description}`;
        } else {
            return `You don't have that item in your inventory.`;
        }
    }
}