/* Daniel Hopper
Program 3-2
*/

"use strict";

const readlineSync = require('readline-sync');

// Get input from user, push input to userValues array if between 1 - 100, end if 0.
let userValues = [];

let userNum = parseInt(readlineSync.question('Enter a number between 1 and 100, or enter 0 to end: '));

while (userNum != 0) {
    if (userNum >= 1 && userNum <= 100) {
        userValues.push(userNum);
        userNum = parseInt(readlineSync.question('Enter a number between 1 and 100, or enter 0 to end: '));
    }
    else {
        console.log('You entered an invalid number!');
        userNum = parseInt(readlineSync.question('Enter a number between 1 and 100, or enter 0 to end: '));
    }
}

// Test for unique values within userValues and push to uniqueValues array
let uniqueValues = [];

for (let i = 0; i < userValues.length; i++) {
    if (uniqueValues.includes(userValues[i]) === false) {
        uniqueValues.push(userValues[i]);
    }
}

/* Count how many times a value in uniqueValues appears in userValues
 then output/dislay the unique value & how many times it appears */
for (let j = 0; j < uniqueValues.length; j++) {
    let count = 0;
    for (let k = 0; k < userValues.length; k++) {
        if (userValues[k] === uniqueValues[j]) {
            count++;
        }
    }
    if (count === 1) {
        console.log(uniqueValues[j] + ' occurs ' + count + ' time');
    }
    else {
        console.log(uniqueValues[j] + ' occurs ' + count + ' times');
    }
}