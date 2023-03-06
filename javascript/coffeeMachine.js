//write "exit" to close the application
// Use "input(str)" to print some text before requesting input

const input = require('sync-input')
let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;
let money = 550;
let action = "";

function printAmount() {
  console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${beans} g of coffee beans
${cups} disposable cups
$${money} of money\n`);
}

while( action = input("Write action (buy, fill, take, remaining, exit): \n"), action !== "exit"){
  switch (action) {
    case "buy":
      let coffeeType = ( input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n") );
      if(coffeeType === "back")
        break;
      coffeeType = Number(coffeeType);
      if(coffeeType === 1) {
        if(water < 250){
          console.log("Sorry, not enough water!\n");
          break;
        }
        if(beans < 16){
          console.log("Sorry, not enough coffee beans!\n");
          break;
        }
        if(cups === 0 ){
          console.log("Sorry not enough disposable cups!\n");
          break;
        }
        water -= 250;
        beans -= 16;
        money += 4;
        cups--;
        console.log("I have enough resources, making you a coffee!\n");
      }
      else if(coffeeType === 2) {
        if(water < 350){
          console.log("Sorry, not enough water!\n");
          break;
        }
        if(milk < 75){
          console.log("Sorry, not enough milk!\n");
          break;
        }
        if(beans < 20){
          console.log("Sorry, not enough coffee beans\n!");
          break;
        }
        if(cups === 0 ){
          console.log("Sorry not enough disposable cups!\n");
          break;
        }
        water -= 350;
        milk -= 75;
        beans -= 20;
        money += 7;
        cups--;
      }
      else if(coffeeType == 3) {
        if(water < 200){
          console.log("Sorry, not enough water!\n");
          break;
        }
        if(milk < 100){
          console.log("Sorry, not enough milk!\n");
          break;
        }
        if(beans < 12){
          console.log("Sorry, not enough coffee beans!\n");
          break;
        }
        if(cups === 0 ){
          console.log("Sorry not enough disposable cups!\n");
          break;
        }
        water -= 200;
        milk -= 100;
        beans -= 12;
        money += 6;
        cups--;
      }
      else{
        console.log("Wrong input, please try again.\n");
      break;
    case "fill":
      water += Number( input ("Write how many ml of water you want to add:\n"));
      milk += Number( input ("Write how many ml of milk you want to add\n"));
      beans += Number( input ( "Write how many grams of coffee beans you want to add:\n"));
      cups += Number( input ( "Write how many disposable cups you want to add:\n"));;
      break;
    case "take":
      console.log(`I gave you $${money}\n`);
      money = 0;
      break;
    case "remaining":
      printAmount();
      break;
  }
}
