/*
Program 2-3
Daniel Hopper
*/

const readlineSync = require('readline-sync');

let userEntered = parseInt(readlineSync.question('Enter any number or enter 0 to end: '));

let sum = 0;
let count = 0;
let positive = 0;
let negative = 0;

while (userEntered != 0) {
  sum += userEntered;
  count++;
  if (userEntered > 0) {
    positive++;
  }
  else {
    negative++;
  }
  userEntered = parseInt(readlineSync.question('Enter any number or enter 0 to end: '));
}

let average = sum / count;

console.log(`You entered ` + positive + ` positive numbers`);
console.log(`You entered ` + negative + ` negative numbers`);
console.log(`The sum is: ` + sum);
console.log(`The average is: ` + average);
