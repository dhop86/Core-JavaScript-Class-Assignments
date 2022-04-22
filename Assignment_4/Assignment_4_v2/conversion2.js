//
//

let conversionUtil = require('./conversionutils2.js');

// import { question } from 'readline-sync';
let readlineSync = require('readline-sync');

let exitProgram = false;

select:
while (exitProgram != true) {

    console.log('\n');
    console.log('     Conversion Options');
    console.log('______________________________')
    console.log('Feet to Meters           [ 1 ]');
    console.log('Meters to Feet           [ 2 ]');
    console.log('Kilometers to Miles      [ 3 ]');
    console.log('Miles to Kilometers      [ 4 ]');
    console.log('Square Feet to Acres     [ 5 ]');
    console.log('Acres to Square Feet     [ 6 ]');
    console.log('Gallons to Cups          [ 7 ]');
    console.log('Pounds to Kilograms      [ 8 ]');
    console.log('Exit Program             [ 9 ]');
    console.log('\n');

    //let functionSelection = parseInt(question('Select an option: '));
    let functionSelection = parseInt(readlineSync.question('Select an option: '));

    if (functionSelection < 1 || functionSelection > 9) {
        console.log('Invalid selection!');
        continue select;
        
    }
    else {
        let convertValue = 0;
        switch (functionSelection) {
            case 1: // Convert feet to meters
                convertValue = parseFloat(readlineSync.question('Enter a value to convert from ft to m: '));
                console.log(convertValue + ' feet = ' + conversionUtil.foot_to_meter(convertValue).toFixed(2) + ' meters.')
                break;
            case 2: // Convert meters to feet
                convertValue = parseFloat(readlineSync.question('Enter a value to convert from m to ft: '));
                console.log(convertValue + ' meters = ' + conversionUtil.meter_to_foot(convertValue).toFixed(2) + ' feet.');
                break;
            case 3: // Convert kilometers to miles
                convertValue = parseFloat(readlineSync.question('Enter a value to convert from km to mi: '));
                console.log(convertValue + ' kilometers = ' + conversionUtil.kilo_to_mile(convertValue).toFixed(2) + ' miles.')
                break;
            case 4: // Convert miles to kilometers
                convertValue = parseFloat(readlineSync.question('Enter a value to convert mi to km: '));
                console.log(convertValue + ' miles = ' + conversionUtil.mile_to_kilo(convertValue).toFixed(2) + ' kilometers.')
                break;
            case 5: // Convert square feet to acres
                convertValue = parseFloat(readlineSync.question('Enter a value to convert sqft to acres: '));
                console.log(convertValue + ' square feet = ' + conversionUtil.sqft_to_acres(convertValue).toFixed(2) + ' acres.')
                break;
            case 6: // Convert acres to square feet
                convertValue = parseFloat(readlineSync.question('Enter a value to convert acres to sqft: '));
                console.log(convertValue + ' acres = ' + conversionUtil.acres_to_sqft(convertValue).toFixed(2) + ' square feet.')
                break;
            case 7: // Convert gallons to cups
                convertValue = parseFloat(readlineSync.question('Enter a value to convert gal to cups: '));
                console.log(convertValue + ' gallons = ' + conversionUtil.gallon_to_cup(convertValue).toFixed(2) + ' cups.')
                break;
            case 8: // Convert pounds to kilograms
                convertValue = parseFloat(readlineSync.question('Enter a value to convert lbs to kg: '));
                console.log(convertValue + ' pounds = ' + conversionUtil.pounds_to_kg(convertValue).toFixed(2) + ' kilograms.')
                break;
            default: // Exit program
                exitProgram = true;
                console.log('Goodbye');
                console.log('\n');
                break;
        }
    }
}