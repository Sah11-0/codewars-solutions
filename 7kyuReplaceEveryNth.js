// Write a method, that replaces every nth char oldValue with char newValue.
// Inputs
// text: the string to modify
// n: change the target letter every nth occurrencies
// old_value (or similar): the targetted character
// new_value (or similar): the character to use as replacement
// Note for untyped languages: all inputs are always valid and of their expected type.

// Rules
// Your method has to be case sensitive!
// If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.

function replaceNth(text, n, oldValue, newValue) {
    if (n <= 0) return text;

    let result = '';
    let count = 0;

    for (let char of text) {
        if (char === oldValue) {
            count++;
            if (count % n === 0) {
                result += newValue;
            } else {
                result += char;
            }
        } else {
            result += char;
        }
    }

    return result;
}
