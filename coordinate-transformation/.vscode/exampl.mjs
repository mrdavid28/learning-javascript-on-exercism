export function memoizeTransform(f) {
  let previousX, previousY, previousResult
  
  return function memoised(x, y) {
    if (previousX === x && previousY === y) {
      return previousResult
    }
    previousX = x
    previousY = y
    return previousResult = f(x, y)
  }
}



export function memoizeTransform(f) {
    let lastX = undefined;
    let lastY = undefined;
    let lastResult = undefined;
    return function(x, y){
      if(lastX === x && lastY === y) return lastResult;
      lastX = x;
      lastY = y;
      lastResult = f(x, y);
      return lastResult;
    }
  }



  export function memoizeTransform(f) {
  let previousX, previousY, previousResult
  
  return function memoised(x, y) {
    if (previousX === x && previousY === y) {
      return previousResult
    }
    previousX = x
    previousY = y
    return previousResult = f(x, y)
  }
}
