//When provided with a letter, return its position in the alphabet.

function position(letter) {
    return `Position of alphabet: ${letter.toLowerCase().charCodeAt(0) - 96}`;
}

//solution 2
function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}