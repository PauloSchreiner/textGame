/* RULES FOR CREATING LOCATIONS 
1. Descriptions must mention the objects present, and their state. How?


*/

import { Item } from './Item.js';
import { Fixture } from './Fixture.js';

export class Location {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.region = data.region;
        this.description = data.description;
        this.items = data.items.map(itemData => new Item(itemData)); 
        this.fixtures = data.fixtures.map(fixtureData => new Fixture(fixtureData)); 
    }
}

