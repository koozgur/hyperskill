let input = require('sync-input');
let currencies = [[1,"USD"], [113.5,"JPY"], [0.89, "EUR"], [74.36, "RUB"], [0.75, "GBP"]];
console.log("Welcome to Currency Converter!");
currencies.forEach( e => console.log(`1 USD equals ${e[0]} ${e[1]}`) );
let arr = ["JPY","EUR","USD","RUB","GBP"];
let given;
while(given = input("What do you want to do?\n1-Convert currencies 2-Exit program\n"), given != 2){
  if(given != 1){
    console.log("Unknown input");
    continue;
  }
  console.log("What do you want to convert?");
  let arr = ["JPY","EUR","USD","RUB","GBP"];
  let from = input("From: ").toUpperCase();
  if(! arr.includes(from)){
    console.log("Unknown currency");
  }
  else{
    let to = input("To: ").toUpperCase();
    
    if(arr.includes(to) && arr.includes(from)){
      let amount = Number(input("Amount: "));
      if(Number.isNaN(amount))
        console.log("The amount has to be a number");
      else if (amount < 1)
        console.log("The amount cannot be less than 1");
      else{
        let numFrom = 1;
        let numTo = 1;
        currencies.forEach(function (e){
          if(e[1] === from)  numFrom = e[0];
          if(e[1] === to) numTo = e[0];
        });
        let result = (amount / numFrom * numTo).toFixed(4);
        console.log(`Result: ${amount} ${from} equals ${result} ${to}`);
      }
    }
    else
      console.log("Unknown currency");
  }
}
console.log("Have a nice day!");
