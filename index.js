var cart = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
 // write your code here
 let item = {
   itemName: name,
   itemPrice: getRandomInt(100)
 };
 cart.push(item);
 return `${item.itemName} has been added to your cart.`;
}

function viewCart() {  
  if (cart.length === 0) { 
  let message = "Your shopping cart is empty.";}
 for (let i = 0, l = cart.length; i<l; i++){
   cart.push(`${item.itemName}${item.itemPrice}`)
 }
 
} 
  
 


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
