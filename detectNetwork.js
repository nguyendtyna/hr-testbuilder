// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Input: string
// Output: string

var detectNetwork = function(cardNumber) {

  // Store the first two characters from input string
  let twoNumPrefix = cardNumber.slice(0, 2);

  // The Diner's Club: starts with 38 or 39, length of 14
  if ((twoNumPrefix === '38' || twoNumPrefix === '39') && cardNumber.length === 14) {
    return 'Diner\'s Club';
  }

  // The American Express: starts with 34/37, length of 15
  if ((twoNumPrefix === '34' || twoNumPrefix === '37') && cardNumber.length === 15) {
    return 'American Express';
  }

};



