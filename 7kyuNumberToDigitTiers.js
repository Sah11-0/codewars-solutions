//Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

function createArrayOfTiers(num) {
    const splitArr = num.toString().split('');
    const result = [];
    for (let i = 0; i < splitArr.length; i++) {
        result.push(splitArr.slice(0, i + 1).join(''))
    }
    return result;
}