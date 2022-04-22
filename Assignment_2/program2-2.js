/*
Program 2-2
Daniel Hopper

https://www.w3schools.com/js/js_random.asp
https://www.w3schools.com/jsref/jsref_tostring_number.asp

*/

const readlineSync = require('readline-sync');

let again = "Y";

while (again == "Y" || again == "y") {
  // User entered numbers
  let playerNums = [];
  playerNums.length = 3;


  let i = 0;
  getNums: while (i < playerNums.length) {
              let userNum = parseInt(readlineSync.question('Enter lotto number ' + (i + 1) + ': '));
              if (userNum >= 0 && userNum < 10) {
                playerNums[i] = userNum;
                i++;
              }
              else {
                console.log('Invalid entry. Enter a number from 0 - 9.');
                continue getNums;
              }
            }

  // Randomly generated numbres between 0-9
  let lottoNums = [];
  lottoNums.length = playerNums.length;
  for (let j = 0; j < lottoNums.length; j++) {
    let randomNum = Math.floor(Math.random() * 10);
    lottoNums[j] = randomNum;
  }

  console.log(`\nYour number is: ` + playerNums[0] + playerNums[1] + playerNums[2]);
  console.log(`The winning number was: ` + lottoNums[0] + lottoNums[1] + lottoNums[2]);

  // All numbers match in exact order
  if (playerNums[0] == lottoNums[0] 
    && playerNums[1] == lottoNums[1] 
    && playerNums[2] == lottoNums[2]) {
    console.log(`You win $10,000!`);
  }
  // All numbers match, but not in exact order
  else if ((playerNums[0] == lottoNums[0] || playerNums[0] == lottoNums[1] || playerNums[0] == lottoNums[2])
    && (playerNums[1] == lottoNums[0] || playerNums[1] == lottoNums[1] || playerNums[1] == lottoNums[2])
    && (playerNums[2] == lottoNums[0] || playerNums[2] == lottoNums[1] || playerNums[2] == lottoNums[2])) {
    console.log(`You win $3,000!`);
  }
    // At least one number matches
  else if ((playerNums[0] == lottoNums[0] || playerNums[0] == lottoNums[1] || playerNums[0] == lottoNums[2])
    || (playerNums[1] == lottoNums[0] || playerNums[1] == lottoNums[1] || playerNums[1] == lottoNums[2])
    || (playerNums[2] == lottoNums[0] || playerNums[2] == lottoNums[1] || playerNums[2] == lottoNums[2])) {
    console.log(`You win $1,000!`);
  }
    // No numbers match
  else {
    console.log(`Sorry, but you did not win.`);
  }
  again = readlineSync.question('\nEnter another number? Y or N: ');
  console.log(`\n`);
}
