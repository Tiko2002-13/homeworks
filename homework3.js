//1.Given an array. Determine whether it consists only from uniques or not.

function uniquearrayornot(arr)  {
    let checkarr = [];
    for(let i = 0;i < arr.length;i++) {
        if(!checkarr.includes(arr[i])) {
            checkarr.push(arr[i])
        } else {
            return false
        }
    }
    return true
}

const givenarray = [1,3,"a",2,5,"a"]
console.log(uniquearrayornot(givenarray))


//2.Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence. 


function elemsbetweenmaxmin(arr) {
    let max;
    let min;
    for(let i = 0;i < arr.length;i++) {
        if(i === 0) {
            max = arr[i]
            min = arr[i]
        } else if(arr[i] < min){
            min = arr[i]
        } else if(arr[i] > max) {
            max = arr[i]
        }
    }
    const count = max - min;
    return count;
}

const arrayofnumbers = [1,3,24,2,5,0,-2,4]
console.log(elemsbetweenmaxmin(arrayofnumbers))


//3.Write a constructor function called CoffeeShop, which has three instance properties:
//1. name : a string (basically, of the shop)
//2. menu : an array of items (of object type), with each item containing the item (name
//of the item), type (whether food or a drink) and price.
//3. orders : an empty array
//and seven methods:
//1. addOrder: adds the name of the item to the end of the orders array if it exists on the
//menu. Otherwise, return &quot;This item is currently unavailable!&quot;
//2. fulfillOrder: if the orders array is not empty, return &quot;The {item} is ready!&quot;. If the
//orders array is empty, return &quot;All orders have been fulfilled!&quot;
//3. listOrders: returns the list of orders taken, otherwise, an empty array.
//4. dueAmount: returns the total amount due for the orders taken.
//5. cheapestItem: returns the name of the cheapest item on the menu.
//6. drinksOnly: returns only the item names of type drink from the menu.
//7. foodOnly: returns only the item names of type food from the menu.
//IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

function addOrder(item) {
    if(this.menu.includes(item)) {
        this.orders.push(item)
    } else {
        return "This item is currently unavailable"
    }
    return this.orders
}
function fulfillOrder(item)  {
    const ord = item.name
    if(this.orders.length === 0) {
        return "All orders have been fulfilled"
    } else {
        return "The " + ord + " is ready"
    }
}
function listOrders() {
    if(this.orders.length !== 0) {
        return this.orders
    } else {
        return []
    }
}

function dueAmount() {
    let amount = 0;
    if(this.orders.length === 0) {
        return 0
    }
    for(let i = 0;i < this.orders.length;i++) {
        amount += this.orders[i].price;
    }
    return amount
}

function cheapestItem() {
    let cheapest;
    let nameofcheapest;
    for(let i = 0;i < this.menu.length;i++) {
        if(i === 0) {
            cheapest = this.menu[i].price;
            nameofcheapest = this.menu[i].name
        } else if(this.menu[i].price < cheapest) {
            cheapest = this.menu[i].price;
            nameofcheapest = this.menu[i].name
        }
    }
    return nameofcheapest
}

function drinksOnly() {
    let result = [];
    for(let i = 0;i < this.menu.length;i++) {
        if(this.menu[i].type === "drink") {
            result.push(this.menu[i].name)
        }
    }
    return result;
}

function foodOnly() {
    let result = [];
    for(let i = 0;i < this.menu.length;i++) {
        if(this.menu[i].type === "food") {
            result.push(this.menu[i].name)
        }
    }
    return result;
}

function CoffeeShop(name,menu,orders) {
    this.name = name
    this.menu = menu
    this.orders = orders
    this.addOrder = addOrder
    this.fulfillOrder = fulfillOrder
    this.listOrders = listOrders
    this.dueAmount = dueAmount
    this.cheapestItem = cheapestItem
    this.drinksOnly = drinksOnly
    this.foodOnly = foodOnly
}
let nam = "Restoran";
const banan = {
    name: "banan",
    type: "food",
    price: 1400
}
const juice = {
    name: "juice",
    type: "drink",
    price: 2000
}
let menu = [banan,juice]
let empty = [];
const result = new CoffeeShop(nam,menu,empty)
const res2 = result.addOrder(juice)
result.addOrder(banan)
const res3 = result.fulfillOrder(juice)
const res4 = result.listOrders()
const res5 = result.dueAmount()
const res6 = result.cheapestItem()
const res7 = result.drinksOnly()
const res8 = result.foodOnly()
console.log(result)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(res6)
console.log(res7)
console.log(res8)
