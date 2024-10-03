// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

var splitInParts = function (s, partLength) {
    let result = [];
    for (let i = 0; i < s.length; i += partLength) {
        result.push(s.slice(i, i + partLength));
    }
    return result.join(' ');
};