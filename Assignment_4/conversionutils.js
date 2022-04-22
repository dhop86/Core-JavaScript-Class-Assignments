/* Daniel Hopper 
conversionutils.js
*/

// A - foot_to_meter: Takes a value for feet and returns the value in meters
function foot_to_meter(feet) {
    return feet * 0.3048;
}

// B - meter_to_foot: Takes a value for meters and returns the value in feet
function meter_to_foot(meters) {
    return meters * 3.28084;
}

// C - kilo_to_mile: Takes a value for kilometers and returns the value in miles
function kilo_to_mile(km) {
    return km * 0.621371;
}

// D - mile_to_kilo: Takes a value for miles and returns the value in kilometers
function mile_to_kilo(miles) {
    return miles * 1.60934;
}

// E - sqft_to_acres: Takes a values for square footage and returns the value in acres
function sqft_to_acres(sqft) {
    return sqft * 2.29568e-5;
}

// F - acres_to_sqft: Takes a value for acres and returns the value in sq feet
function acres_to_sqft(acres) {
    return acres * 43560;
}

// G - gallon_to_cup: Takes a value for gallons and returns the value in cups
function gallon_to_cup(gal) {
    return gal * 16;
}

// H - pounds_to_kg: Takes a value for pounds and returns the value in kilograms
function pounds_to_kg(lbs) {
    return lbs * 0.453592;
}

export { foot_to_meter, 
    meter_to_foot, 
    kilo_to_mile, 
    mile_to_kilo, 
    sqft_to_acres, 
    acres_to_sqft, 
    gallon_to_cup,
    pounds_to_kg, 
}