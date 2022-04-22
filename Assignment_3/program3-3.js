/* Daniel Hopper
Program 3-3
*/

"use strict";

const readlineSync = require('readline-sync');

let allScores = [];

// Get test scores and push to array
let testScore = parseInt(readlineSync.question('Enter a test score: '));

while (testScore >= 0) {
    allScores.push(testScore);
    testScore = parseInt(readlineSync.question('Enter a test score: '));
}

// Calculate average
let count = 0;
let sum = 0;
for (let i = 0; i < allScores.length; i++) {
    sum += allScores[i];
    count++;
}
let average = sum / count;

// Determine how many tests were higher, lower, or equal to the average
let higherAverage = 0;
let lowerAverage = 0;
let equalsAverage = 0;
for (let j = 0; j < allScores.length; j++) {
    if (allScores[j] > average) {
        higherAverage++;
    }
    else if (allScores[j] < average) {
        lowerAverage++;
    }
    else {
        equalsAverage++;
    }
}

console.log('The average score was: ' + average.toFixed(0));
console.log(higherAverage + ' scores where higher than the average score.');
console.log(lowerAverage + ' scores where lower than the average score.');
console.log(equalsAverage + ' scores where equal to the average score.');