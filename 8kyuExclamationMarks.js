//Replace all vowels to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      s = s.replace(s[i], '!');
    }
  }
  return s;
}

//solution 2
const replace = s => s.replace(/[aeiou]/gi, '!');
