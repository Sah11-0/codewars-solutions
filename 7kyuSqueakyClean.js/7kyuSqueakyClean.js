//Your squeakyClean function should accept an input array of values and return a new array with all empty strings, 0, null and undefined removed.

function squeakyClean(arr) {
    for (let i = arr.length -1; i >= 0; i--) {
      if (arr[i] === '' || arr[i] === null || arr[i] === undefined || arr[i] === 0) {
          arr.splice(i,1);
      } 
    }
     return arr; 
  }