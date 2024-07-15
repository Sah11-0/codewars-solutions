//In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.
// Note: Both arrays have the same dimensions.

function getLargerNumbers(a, b) {
    let newArr = [];
    for (let i = 0; i < b.length; i++) {
      if (a[i] > b[i]) {
        newArr.push(a[i]);
      } else {
        newArr.push(b[i]);
      }
    }
    return newArr;
  }