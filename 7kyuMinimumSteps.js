//Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

function minimumSteps(numbers, value) {
    let sortedNumbers = [...numbers].sort((a, b) => a - b);
    
    let sum = 0;
    let counter = 0;
  
    for (let i = 0; i < sortedNumbers.length; i++) {
      sum += sortedNumbers[i];
      counter++;
      if (sum >= value) {
        return counter - 1;
      }
    }
  }
  
//solution 2
function minimumSteps(numbers, value) {
  const nums = numbers.slice().sort((a, b) => a - b);
  for (let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum >= value) {
      return i;
    }
  }
}
  