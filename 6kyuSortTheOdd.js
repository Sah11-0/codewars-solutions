// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    let oddNums = array.filter(n => n % 2 !== 0).sort((a, b) => a - b);
    return array.map(n => n % 2 !== 0 ? oddNums.shift() : n);
}