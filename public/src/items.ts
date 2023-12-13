//配列
var itemNames = [1, "Coffee", "Tea", "Water"];
console.log(itemNames);

//オブジェクト配列
var item1 = {
    id: 1,
    name: "Coffee",
    price: 350,
    isSale: false,
}
var item2 = {
    id: 2,
    name: "Tea",
    price: 400,
    isSale: false,
}
var item3 = {
    id: 3,
    name: "Water",
    price: 150,
    isSale: false,
}

//var items:object[] = [item1, item2, item3];
var items = [item1, item2, item3];
console.log(items, typeof items);

var borderPrice = 350;
var filterItems = items.filter((item) => item.price <= borderPrice);
console.log(filterItems);

//function
// function calculateTotalPrice(price:number, amount:number): number {
//    var totalPrice = price * amount; 
//    return totalPrice;
// }
//anonymus function
// const calculateTotalPrice = function(price:number, amount:number): number {
//    var totalPrice = price * amount; 
//    return totalPrice;
// }
//arrow function
const calculateTotalPrice = (price:number, amount:number): number => {
    var totalPrice = price * amount; 
    return totalPrice;
 }
 
 function findItem(id:number) {
     var result = items.find((item) => item.id == id);
     return result;
     // if (result) {
     //     return result;
     // } else {
     //     return { id: 0, name: "", price: 0 };
     // }
 }
 
 var amount = 5;
 var totalPrice = calculateTotalPrice(item1.price, amount);
 console.log(totalPrice);
 
 var itemId = 5;
 var selectItem = findItem(itemId);
 console.log(selectItem);