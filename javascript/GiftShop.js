const input = require('sync-input')  //put this line to get input
console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);
let number = 0;
let ticket = 0;
let gifts = {
  1: ["Teddy Bear", 10],
  2: ["Big Red Ball", 5],
  3: ["Huge Bear", 50],
  4: ["Candy", 8],
  5: ["Stuffed Tiger", 15],
  6: ["Stuffed Dragon", 30],
  7: ["Skateboard", 100],
  8: ["Toy Car", 25],
  9: ["Basketball", 20],
  10: ["Scary Mask", 75]
}

function printGifts(){
  console.log("Here's the list of gifts:\n");
  if(Object.keys(gifts).length == 0){             //keep in mind that [] === [] returns false
    console.log("Wow! There are no gifts to buy.");
    return;
  }
  for(let gift of Object.keys(gifts)){
    console.log(`${gift}- ${gifts[gift][0]}, Cost: ${gifts[gift][1]} tickets`);
  }
}

printGifts();

while(number = Number(input(`\nWhat do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n`)),number !== 5){
   if( Number.isNaN(number) || (number < 1) || (number > 5) ){
     console.log("Please enter a valid number!");
     continue;
   }
  switch (number){
    case 1:
      if(Object.keys(gifts).length == 0){
        console.log("Wow! There are no gifts to buy.");
        continue;
      }
      let taken = Number(input("Enter the number of the gift you want to get:"));
      if(Number.isNaN(taken)){
        console.log("Please enter a valid number!");
        continue;
      }
      if(!(Object.keys(gifts)).includes(String(taken))){
        console.log("There is no gift with that number!");
        continue;
      }
      if(ticket < gifts[taken][1]){
        console.log("You don't have enough tickets to buy this gift.");
        console.log(`Total tickets: ${ticket}`);
        continue;
      }
      console.log(`Here you go, one ${gifts[taken][0]}!`);
      ticket -= gifts[taken][1];
      console.log(`Total tickets: ${ticket}`);
      delete gifts[taken];
      break;
    case 2:
      let t = Number(input("Enter the ticket amount:"));
      if(Number.isNaN(t) || (t < 0 || t > 1000)){
        console.log("Please enter a valid number between 0 and 1000.");
        continue;
      }
      ticket += t;
      console.log(`Total tickets: ${ticket}`);
      break;
    case 3:
      console.log(`Total tickets: ${ticket}`);
      break;
    case 4:
      console.log("Here's the list of gifts:\n");
      for(let gift of Object.keys(gifts)){
        console.log(`${gift}- ${gifts[gift][0]}, Cost: ${gifts[gift][1]} tickets`);
      }
      break;
    default:
      console.log("Wrong case!");
      break;
  }
}
console.log("Have a nice day!");
