/* Daniel Hopper
Program5_1v2
*/

import { question } from 'readline-sync';

class OrangeTree {
    constructor(treeHeight, treeAge, fruitCount) {
        this.treeHeight = treeHeight;
        this.treeAge = treeAge;
        this.fruitCount = fruitCount;
    }

    height() {
        return this.treeHeight += 3;
    }
    
    oneYearPasses() {
        return this.treeAge += 1;
    }

    countOranges() {
        if (this.treeAge >= 5) {
            this.fruitCount += addFruit;
            console.log('The tree has ' + this.fruitCount + ' oranges remaining');
        }
        return this.fruitCount, addFruit += 2;
    }

    pickAnOrange() {
        if (this.fruitCount > 0) {
            this.fruitCount -= 1;
            console.log('That orange was delicious!');
        }
        else {
            console.log('No fruit to pick this year. Maybe next year.');
        }
        return this.fruitCount;
    }
}

let myNewTree = new OrangeTree(0, 0, 0);

console.log('\n');
let yearsToGrow = parseInt(question('How many years should the tree grow? '));

let addFruit = 5;

while (myNewTree.treeAge < yearsToGrow) {
    
    console.log('\n');
    myNewTree.oneYearPasses();
    myNewTree.height();

    console.log('The tree is now ' + myNewTree.treeAge + ' year old and ' + myNewTree.treeHeight + ' feet tall');
    
    if (myNewTree.treeAge >= 5) {
        myNewTree.countOranges();
    }

    let pickfruit = question('Do you want to pick an orange? Y or N: ');
    if (pickfruit === 'Y' || pickfruit === 'y') {
        myNewTree.pickAnOrange(addFruit);
    }
}

console.log('\n');
console.log('The tree has died.');
console.log('The tree was ' + myNewTree.treeHeight + ' feet tall.');
console.log('There were ' + myNewTree.fruitCount + ' uneaten oranges on the tree.');
console.log('\n');