//Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou". We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

function solve(s) {
    let maxValue = 0;
    let currentValue = 0;
    for (let i = 0; i < s.length; i++) {
      const char = s[i]
      if('aeiou'.includes(char)) {
        currentValue = 0;
      } else {
        const charValue = char.charCodeAt(0) - 96
        currentValue += charValue;
      }
      if(currentValue > maxValue) {
        maxValue = currentValue;
      }
    }
    return maxValue;
  };