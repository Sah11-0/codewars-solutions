//In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

function secondSymbol(s, symbol) {
    const splitStr = s.split('');
    let occurenceCount = 0;
    for (let i = 0; i < splitStr.length; i++) {
      if (splitStr[i] === symbol) {
        occurenceCount ++;
         if (occurenceCount === 2) {
          return i;
      }
    }
  }
      return -1;
}


//solution 2 
function secondSymbol(s, symbol) {
  return s.indexOf(symbol, s.indexOf(symbol) + 1);
}