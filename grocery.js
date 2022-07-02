var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());
var item1 = new Grocery('item1', 2);
var item2 = new Grocery('item2', 1);
var item3 = new Grocery('item3', 5);
var items = [];
items.push(item1);
items.push(item2);
items.push(item3);
console.log(items);
