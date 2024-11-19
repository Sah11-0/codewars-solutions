// Move every letter in the provided string forward 10 letters through the alphabet.
// If it goes past 'z', start again at 'a'.
// Input will be a string with length > 0.

function moveTen(s) {

    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let shiftedString = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (lowerAlphabet.includes(char)) {
            let newIndex = (lowerAlphabet.indexOf(char) + 10) % 26;
            shiftedString += lowerAlphabet[newIndex];
        } else if (upperAlphabet.includes(char)) {
            let newIndex = (upperAlphabet.indexOf(char) + 10) % 26;
            shiftedString += upperAlphabet[newIndex];
        } else {
            shiftedString += char;
        }
    }
    return shiftedString;
}

//solution 2
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const map = 'klmnopqrstuvwxyzabcdefghij';
const moveTen = s => [...s].map(x => map[alpha.indexOf(x)]).join('');

//dynamic 
const shiftAlphabet = (shift) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    return alpha.slice(shift) + alpha.slice(0, shift);
};

const moveDynamic = (s, shift) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const map = shiftAlphabet(shift);
    return [...s].map(x => map[alpha.indexOf(x)]).join('');
};
