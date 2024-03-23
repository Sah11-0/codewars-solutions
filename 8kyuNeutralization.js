// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// The two strings will be the same length.

function neutralize(s1, s2) {
    let result = '';
    for (let i = 0; i < s1.length; i++){
      const char1 = s1[i];
      const char2 = s2[i];
      if (char1 === '+' && char2 === '+') {
        result += '+';
      } else if (char1 === '-' && char2 === '-') {
        result += '-';
      } else {
        result += '0';
      }
    }
    return result;
  }