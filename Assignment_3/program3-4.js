/* Daniel Hopper
Program 3-4

The score is > or = the best - 10 then the grade is A.
The score is > or = the best - 20 then the grade is B.
The score is > or = the best - 30 then the grade is C.
The score is > or = the best - 40 then the grade is D.
Anything else is an F

*/

const readlineSync = require('readline-sync');

// Get number of students
let numStudents = parseInt(readlineSync.question('Enter the number of students: '));

let testScores = [];

// Hold highest test score
let highscore = 0;

// Get test score for each student & test for high score
for (let i = 0; i < numStudents; i++) {
    let score = parseInt(readlineSync.question('Enter Score: '));
    testScores[i] = score;
        if (score > highscore) {
            highscore = score;
        }
}

// Calculate each student's grade compared to high score
for (let j = 0; j < testScores.length; j++) {
    if (testScores[j] >= highscore - 10) {
        console.log('Student ' + (j + 1) + ' score is ' + testScores[j] + ' and grade is A');
    }
    else if (testScores[j] >= highscore - 20) {
        console.log('Student ' + (j + 1) + ' score is ' + testScores[j] + ' and grade is B');
    }
    else if (testScores[j] >= highscore - 30) {
        console.log('Student ' + (j + 1) + ' score is ' + testScores[j] + ' and grade is C');
    }
    else if (testScores[j] >= highscore - 40) {
        console.log('Student ' + (j + 1) + ' score is ' + testScores[j] + ' and grade is D');
    }
    else {
        console.log('Student ' + (j + 1) + ' score is ' + testScores[j] + ' and grade is F');
    }
}