/* Daniel Hopper
Episode 1 - Program 1-3 */

// Establish the constant for number of seconds per year
const SEC_PER_YEAR = 3.154e+7

/* Calculate the birth rate, death rate, and immigration rate per year. Divide
the seconds per year by the giving rate of births, deaths, and immigrants at
their respective frequency in seconds. */
let currentPop = 412000000;
let birthRate = SEC_PER_YEAR / 7; // Number of births per year
let deathRate = SEC_PER_YEAR / 30; // Number of deaths per year
let immRate = SEC_PER_YEAR / 60; // Number of immigrants per year

/* Calculate the number of births, deaths, and immigrants over a 10 year period
by multiplying the determined birth, death, and immigration rates by 10. */
let births = birthRate * 10;
let deaths = deathRate * 10;
let immigrants = immRate * 10;

// Sum births, deaths, and immigrants over a 10 year period with current population.
let futurePop = currentPop + births - deaths + immigrants;

console.log('After 10 years the population will be: ', futurePop.toFixed(0));
