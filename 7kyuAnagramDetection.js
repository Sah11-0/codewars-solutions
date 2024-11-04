//An anagram is the result of rearranging the letters of a word to produce a new word.
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// write the function isAnagram

function isAnagram(test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();

  if (test.length !== original.length) {
    return false;
  }

  let str1 = test.split("").sort().join("");
  let str2 = original.split("").sort().join("");

  let result = (str1 === str2);
  return result;
};

//solution 2
function isAnagram(test, original) {
  return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}

//solution 3
const isAnagram = (test, original) => {
  const word1 = test.toLowerCase().split('').sort().join('');
  const word2 = original.toLowerCase().split('').sort().join('');

  return word1 === word2;
}

//optimal solution
function isAnagram(test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();

  if (test.length !== original.length) return false;

  const charCount = {};

  for (let char of original) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of test) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;

}
