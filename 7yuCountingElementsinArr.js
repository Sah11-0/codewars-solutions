//Write a function called countElements that takes in an array of integers and returns an object with the count of each unique element in the array.
// The function should correctly count the frequency of each element in the array.
// The input array can contain positive and negative integers, as well as zero.
// If the array is empty, the function should return an empty object.

function countElements(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1;
    }
    return count;
}