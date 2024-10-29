// Given a string of characters, return the character that appears the most often.

function maxChar(str) {
    let charMap = {};
    let maxCount = 0;
    let maxChar = '';

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let char in charMap) {
        if (maxChar[char] > maxCount) {
            maxCount = maxChar[char];
            maxChar = char;
        }
    }
    return maxChar;

}
