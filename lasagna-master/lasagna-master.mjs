/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * 
 * @param {timer} number - simply number
 * }
 */

 export function cookingStatus (timer) {
    if(timer===0) {
        return 'Lasagna is done.'
    } else if (timer!==0 && isNaN(timer)===false) {
        return 'Not done, please wait.'
    } else {
       return 'You forgot to set the timer.'
    }
     
  
}

export function preparationTime(layers, time_for_layer) {
    let number_of_layers = layers.length
    if(time_for_layer===null || time_for_layer=== undefined) {
        return number_of_layers*2
    } 
    return number_of_layers*time_for_layer
}


export function quantities(noodles_and_sauce) {
    let amount_of_noodles = 0 , amount_of_sauce = 0 , array_length = noodles_and_sauce.length
    for(let counter=0; counter<array_length; counter++) {
        if(noodles_and_sauce[counter]== "noodles") {
            amount_of_noodles+=50
        } else if (noodles_and_sauce[counter]=="sauce") {
            amount_of_sauce+=0.2
        } 
    }
    return {noodles: amount_of_noodles, sauce:amount_of_sauce}
    
}


export function addSecretIngredient(friendsList, myList) {
    let friendsList_last_element = friendsList.length - 1
    myList.push(friendsList[friendsList_last_element])
}


export function scaleRecipe(recipe, number_of_portions ) {
    throw("Euro Euro")
}