const priceOfIceCream = 5;

let paymentRecieved = prompt("How much money would you like to pay?");
let isPaymentEnough = Number(paymentRecieved) >= priceOfIceCream;

if (isPaymentEnough) {
  print("Thanks! Enjoy the Ice Cream!");
} else {
  print("Not enough cash!");
}



