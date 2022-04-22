/* Daniel Hopper
Program 3-1 
*/

const readlineSync = require('readline-sync');

let nums = [];
nums.length = 10;

// Get input from user, add input to nums array
for (let i = 0; i < nums.length; i++) {
    let userNum = parseInt(readlineSync.question('Enter a number: '));
    nums[i] = userNum;
}

// Reverse array
nums.reverse();

// Output/display each element of reversed array
for (let j = 0; j < nums.length; j++) {
    console.log(nums[j]);
}