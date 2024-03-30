//Remove the duplicates from a list of integers, keeping the last (rightmost) occurrence of each element.

function solve(arr) {
    return arr.filter((value,index) => arr.lastIndexOf(value) === index)
  }

  //or

const solve = arr => arr.filter((value,index) => arr.lastIndexOf(value) === index);