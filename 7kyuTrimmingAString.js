//Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

function trim(str, size) {
    if (str.length <= size){
      return str;
    } else if (size <= 3){
      return str.slice(0, size) + '...' 
    } else {
      return str.slice(0, (size - 3)) + '...'
    }
  }