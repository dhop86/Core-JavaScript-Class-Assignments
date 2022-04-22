/*
Program 2-1
Daniel Hopper

Solution
https://www.youtube.com/watch?v=17tmTOYMseo&ab_channel=ThinkwellVids

ax + by = c
dx + ey = f

Solve for X
| c b |
| f e |    (c * e) - (f * b)
------  => ----------------- = x
| a b |    (a * e) - (d * b)
| d e |

Solve for Y
| a c |
| d f |    (a * f) - (d * c)
------  => ----------------- = y
| a b |    (a * e) - (d * b)
| d e |

*/

const readlineSync = require('readline-sync');

let a = parseFloat(readlineSync.question('Enter a: '));
let b = parseFloat(readlineSync.question('Enter b: '));
let c = parseFloat(readlineSync.question('Enter c: '));
let d = parseFloat(readlineSync.question('Enter d: '));
let e = parseFloat(readlineSync.question('Enter e: '));
let f = parseFloat(readlineSync.question('Enter f: '));

let x = ((c * e) - (f * b)) / ((a * e) - (d * b));
let y = ((a * f) - (d * c)) / ((a * e) - (d * b));

if ((a * d) - (b * c) == 0) {
  console.log(`No Solution`);
}
else {
  console.log(`x is ` + x.toFixed(1) + ` and y is ` + y.toFixed(1));
}
