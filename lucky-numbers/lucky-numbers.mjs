// @ts-nocheck


/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let mystring  = [" "], my_second_string= [" "] 
  //console.log(String(array1))
  for(let counter = 0; counter<array1.length;counter++) {
    mystring+=array1[counter].toString()
  }
  for(let counter = 0; counter<array2.length;counter++) {
    my_second_string+=array2[counter].toString()
  }

  let number1= Number(mystring), number2 = Number(my_second_string)
  return number1+number2
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let my_string_array = String(value)
  let reversed_string_array = my_string_array.split('').reverse().join('')
  if(my_string_array===reversed_string_array) {
    return true
  } return false
}

console.log(luckyNumber(2312))
/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
 export function errorMessage(input) {
  if(input==='' || input===undefined || input ===null) {
    return 'Required field';
  } 
  else if(isNaN(Number(input)) || Number(input)===0) {
    return 'Must be a number besides 0'
  } return ''
}

console.log(errorMessage('some text'))
