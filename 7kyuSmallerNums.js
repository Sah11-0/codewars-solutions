// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

function smaller(nums) {
    let newArr = []
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count ++
      }
    }
     newArr.push(count);
      
   }
    return newArr;
   }