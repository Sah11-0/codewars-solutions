//Given a string str, reverse it and omit all non-alphabetic characters.

function reverseLetter(str) {
    return str
        .split('')
        .filter(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))
        .reverse()
        .join('');
  }