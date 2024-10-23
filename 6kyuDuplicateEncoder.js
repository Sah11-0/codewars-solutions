// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
    word = word.toLowerCase();
    const charCount = {};

    for (let char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return [...word].map(char => charCount[char] > 1 ? ')' : '(').join('');

}