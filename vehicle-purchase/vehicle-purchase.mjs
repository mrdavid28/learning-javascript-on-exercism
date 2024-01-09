// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
/*
Some kinds of vehicles require a drivers license to operate them. Assume only the kinds 
'car' and 'truck' require a license,
 everything else can be operated without a license.

Implement the needsLicense(kind) function that takes
 the kind of vehicle and returns a boolean indicating whether you need a license 
 for that kind of vehicle*/
export function needsLicense(kind) {
  if (kind==="car" || kind==="truck"){
    return true
  } else {
    return false
  }
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  if(option1<option2) {
    return option1 + " is clearly the better choice."
  } else {
    return option2 + " is clearly the better choice."
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
/*the vehicle is less than 3 years old, it costs 80% of the original price 
it had when it was brand new. If it is more than 10 years old, it costs 50%. 
If the vehicle is at least 3 years old but not older than 10 years, 
it costs 70% of the original price.

Implement the calculateResellPrice(originalPrice, age)
 function that applies this logic using if, 
 else if and else (there are other ways if you want to practice).
  It takes the original price and the age of the vehicle as arguments 
  and returns the estimated price in the dealership.

calculateResellPrice(1000, 1);
// => 800

calculateResellPrice(1000, 5);
// => 700

calculateResellPrice(1000, 15);
// => 500*/
export function calculateResellPrice(originalPrice, age) {
  if(age<3) {
    originalPrice = originalPrice * 0.8
    return originalPrice
  } else if(age>10){
    originalPrice = originalPrice * 0.5
    return originalPrice
  } else {
    originalPrice = originalPrice * 0.7
    return originalPrice
  }
}
