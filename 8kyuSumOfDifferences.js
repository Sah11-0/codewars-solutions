// Your task is to sum the differences between consecutive pairs in the array in descending order.
// [2, 1, 10]  -->  9
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
    arr.sort((a, b) => b - a);
    let differences = [];
    for (let i = 0; i < arr.length - 1; i++) {
      differences.push(arr[i] - arr[i + 1]);
    }
    let sumOfDifferences = differences.reduce((acc, curr) => acc + curr, 0);
    return sumOfDifferences;  
  }