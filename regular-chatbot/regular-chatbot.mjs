// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

 export function isValidCommand(command) {
  const first = command.split(',')[0]
  if(first === "Chatbot" || first === "CHATBOT" || first==="chatbot") {
      return true
  } else {
    return false
  }
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  let res = message.replace(/emoji\w+/g, '')
  return res
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation*/
export function checkPhoneNumber(number) {
  let regex = /\(\+\d+\)/g;
  if (number.match(regex)) {
    return  "Thanks! You can now download me to your phone."
  } else {
    return "Oops, it seems like I can't reach out to "+number
  }

}
/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  let regex = /(\w+)\.\w+/g
  return  userInput.match(regex)
}



/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {

  let words = fullName.split(', '); // Split a string into an array of words

// Reverse words placement 
  let reversedWords = [words[1], words[0]];

//.join method
  let result = reversedWords.join(' ');
  return "Nice to meet you, " + result
}


checkPhoneNumber('(+34) 659-771-594');
