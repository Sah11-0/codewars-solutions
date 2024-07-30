//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {  
    let sortedNums = [...numbers].sort((a, b) => a - b);
    let smallNumsArr = sortedNums.slice(0, 2);
    let sum = smallNumsArr[0] + smallNumsArr[1];
    return sum;
  }