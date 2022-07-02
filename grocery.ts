class Grocery {
    name: string
    quantity: number

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }
}

const item1 = new Grocery('item1', 2);
const item2 = new Grocery('item2', 1);
const item3 = new Grocery('item3', 5);

const items = [];

items.push(item1);
items.push(item2);
items.push(item3);


