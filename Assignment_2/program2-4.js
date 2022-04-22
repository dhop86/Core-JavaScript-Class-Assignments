/*
Program 2-4
Daniel Hopper
*/

const readlineSync = require('readline-sync');

let numOfStudents = parseInt(readlineSync.question('How many students? '));
let count = 0;
let highScore = 0;
let highScoreStudent = "";

while (count < numOfStudents) {
  let studentName = readlineSync.question("Enter the student's name: ");
  let studentScore = parseInt(readlineSync.question('Enter their score: '));

  if (studentScore > highScore) {
    highScoreStudent = studentName;
    highScore = studentScore;
  }
  count++;
}

console.log(`The student with the highest score is ` + highScoreStudent);
