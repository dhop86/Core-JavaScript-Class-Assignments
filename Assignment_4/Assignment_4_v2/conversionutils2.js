//
//

function foot_to_meter(feet) {
    return feet * 0.3048;
}

function meter_to_foot(meters) {
    return meters * 3.28084;
}

function kilo_to_mile(km) {
    return km * 0.621371;
}

function mile_to_kilo(miles) {
    return miles * 1.60934;
}

function sqft_to_acres(sqft) {
    return sqft * 2.29568e-5;
}

function acres_to_sqft(acres) {
    return acres * 43560;
}

function gallon_to_cup(gal) {
    return gal * 16;
}

function pounds_to_kg(lbs) {
    return lbs * 0.453592;
}

module.exports = { foot_to_meter, 
    meter_to_foot, 
    kilo_to_mile, 
    mile_to_kilo, 
    sqft_to_acres, 
    acres_to_sqft, 
    gallon_to_cup,
    pounds_to_kg, 
}