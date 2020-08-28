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

  // Store prefixes from input string
  let oneNumPrefix = cardNumber.slice(0, 1);
  let twoNumPrefix = cardNumber.slice(0, 2);

  // The Diner's Club: starts with 38 or 39, length of 14
  if ((twoNumPrefix === '38' || twoNumPrefix === '39') && cardNumber.length === 14) {
    return 'Diner\'s Club';
  }

  // The American Express: starts with 34/37, length of 15
  if ((twoNumPrefix === '34' || twoNumPrefix === '37') && cardNumber.length === 15) {
    return 'American Express';
  }

  // Visa: starts with 4, length of 13, 16 or 19
  let lengthVisa = [13, 16, 19];

  for (let i = 0; i < lengthVisa.length; i++) {
    if (oneNumPrefix === '4' && cardNumber.length === lengthVisa[i]) {
      return 'Visa';
    }
  }

  // MasterCard: starts with 51, 52, 53, 54 or 55, length of 16
  let prefixMaster = ['51', '52', '53', '54', '55'];

  for (let i = 0; i < prefixMaster.length; i++) {
    if (twoNumPrefix === prefixMaster[i] && cardNumber.length === 16) {
      return 'MasterCard';
    }
  }

};



