//When provided with a letter, return its position in the alphabet.

function position(letter) {
    return `Position of alphabet: ${letter.toLowerCase().charCodeAt(0) - 96}`;
}