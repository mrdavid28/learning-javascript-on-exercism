// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for(let counter=0;counter<birdsPerDay.length; counter++) {
    sum +=birdsPerDay[counter];
  }
  return sum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let sum = 0
  if(week==1) {
    for(let counter=0;counter<=6; counter++){
      sum+=birdsPerDay[counter]
    } 
  } 
  else {
    for(let counter=((week-1)*7);counter<(week*7)-1;counter++) {
      sum+=birdsPerDay[counter]
    }
  }
  return sum
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  const days = birdsPerDay.length
  for(let counter = 0; counter <; counter+=2) {
      birdsPerDay[counter]+=1
  }
  return birdsPerDay
}
