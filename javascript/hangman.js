// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
let found = 0;
console.log(`H A N G M A N\n`);
let arr = ["python", "java", "swift", "javascript"];
let choice = "";
let stringVersion = "";  
let holdCharacters = [];
let winCount = 0;
let lostCount = 0;
let currentState = "";


while(currentState = input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: > '), currentState != "exit"){
  if(currentState == "results"){
    console.log(`You won: ${winCount} times.`);
    console.log(`You lost: ${lostCount} times.`);
    continue;
  }
  choice = arr[Math.floor(Math.random()*4)];
  stringVersion = "-".repeat(choice.length);  //"---...--";
  console.log(stringVersion);
  holdCharacters = [];
  currentState = "";
  found = 0;
  console.log(stringVersion);
  for(let i = 0; i < 8; i++){
    let takenCharacter = input("Input a letter: > ");
    if(takenCharacter.length > 1 || takenCharacter == ""){
      console.log("Please, input a single letter.\n");
      i--;
      console.log(stringVersion);
      continue;
    }
    if (!takenCharacter.match(/[a-z]/) ){
      console.log("Please, enter a lowercase letter from the English alphabet.\n");
      console.log(stringVersion);
      i--;
      continue;
    }
    if(holdCharacters.includes(takenCharacter)) {
      console.log("You've already guessed this letter.\n");
      console.log(stringVersion);
      i--;
      continue;
    }
    holdCharacters.push(takenCharacter);
    let modified = new RegExp(takenCharacter);
    if(modified.test(choice) == true){
      if(modified.test(stringVersion) == true){
        console.log(stringVersion);
        continue;
      }
      for(let pass = 0; pass < choice.length;pass++ ){
        if (choice[pass] == takenCharacter) {
          let arr = stringVersion.split(""); // array oldu
          arr[pass] = takenCharacter;
          stringVersion = arr.join("");
        }
      }
      i--;
    }
    else{
      console.log("That letter doesn't appear in the word.");
    }
    console.log("");
    console.log(stringVersion);
    if(/-/.test(stringVersion) == false){
      console.log(`You guessed the word ${choice}!\nYou survived!`);
      found = 1;
      winCount++;
      break;
    }
  }
  if(found == 0){
    console.log("You lost!");
    lostCount++;
  }
}
