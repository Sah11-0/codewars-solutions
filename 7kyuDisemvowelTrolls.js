//Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!". Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    const chars = str.split('');
    const filteredChars = chars.filter(function(char) {
      return !vowels.includes(char);
    });
    const result = filteredChars.join('');
    return result;
  };

//or
function disemvowel(str) {
  const splitStr = str.split('')
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const filteredArr = splitStr.filter(e => !vowels.includes(e))
  return filteredArr.join('');
}
