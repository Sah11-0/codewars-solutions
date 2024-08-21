//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
    const nStr = n.toString();
    const numbersArr = nStr.split('');
    const sortedArr = numbersArr.sort((a, b) => b - a);
    return Number(sortedArr.join(''));
}

//refactored 
function descendingOrder(n) {
    return Number(n.toString().split('').sort((a, b) => b - a).join(''));
}
