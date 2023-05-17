//When provided with a String, capitalize all vowels
//For example: Input : "Hello World!" Output : "HEllO WOrld!"
//Note: Y is not a vowel in this kata.

function swap(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let output = '';
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (vowels.includes(char)) {
        output += char.toUpperCase();
      } else {
        output += char;
      }
    }
    return output;
  }