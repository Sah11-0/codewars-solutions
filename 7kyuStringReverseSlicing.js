// You'll be given a string of characters as an input. Complete the function that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.
// Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.

function reverseSlice(str) {
    const reversedStr = str.split('').reverse().join('');
    const result = [];
    for (let i = 0; i < reversedStr.length; i++) {
      result.push(reversedStr.slice(i));
    }
    
    return result;
  }