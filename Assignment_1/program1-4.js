/* Daniel Hopper
Episode 1 - Program 1-4 */

/* Solve for x & y
3.4x + 50.2y = 44.5
2.1x + .55y = 5.9 */
let a = 3.4;
let b = 50.2;
let c =  2.1;
let d = 0.55;
let e = 44.5;
let f = 5.9;

/* x = ed - bf / ad - bc
   y = af - ec / ad  - bc */
let x = ((e * d) - (b * f)) / ((a * d) - (b * c));
let y = ((a * f) - (e * c)) / ((a * d) - (b * c));

/* ax + by = e
   cx + dy = f  */
let results_1 = (a * x) + (b * y);
let results_2 = (c * x) + (d * y);

console.log('3.4x + 50.2y = ',results_1);
console.log('2.1x + .55y = ',results_2.toFixed(1));
console.log('x = ',x);
console.log('y = ',y);
