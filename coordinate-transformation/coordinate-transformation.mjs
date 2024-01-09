// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  return function move_coordinates_in_function(x, y){
    let coordinate_x = x+dx, coordinate_y = y+dy
    return [coordinate_x, coordinate_y] 
  }
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return function scale_coordinates_function(x, y){
    let coordinate_x = x*sx, coordinate_y = y*sy
    return [coordinate_x, coordinate_y] 
  }
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  return function compose_functions(x, y) {
      let [a,b] = f(x,y)
      let [c,d] =  g(a,b)
      return [c,d]
  } 
}



console.log(memoizeTransform(translate2d(1, 2)));

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 export function memoizeTransform(f) {
  let last_x, last_y, last_result;
  return function memoise(x,y) {
    if(last_x===x && last_y===y) {
      return last_result
    }
    last_x=x
    last_y=y
    last_result= f(x,y)
    return last_result
  }
}

*/
export function memoizeTransform(f) {
  let last_x, last_y, last_result;
  return function memoise(x,y) {
    if(last_x===x && last_y===y) {
      return last_result
    }
    last_x=x
    last_y=y
    last_result= f(x,y)
    return last_result
  }
}

