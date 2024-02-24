// Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

// And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.

// Task:

// Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

// The word should not begin with the letter "I", for example Inspire.
// The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
// The first letter should not be lowercase, for example road.

function i(word) {
    if (word.startsWith('I')) {
       return "Invalid word";
     }
   
     let vowels = ['a', 'e', 'i', 'o', 'u'];
     let vowelCount = 0;
     let consonantCount = 0;
   
     for (let char of word.toLowerCase()) {
       if (vowels.includes(char)) {
         vowelCount++;
       } else if (char >= 'a' && char <= 'z') {
         consonantCount++;
       }
     }
   
     if (vowelCount >= consonantCount) {
       return "Invalid word";
     }
   
     if (word.charAt(0) === word.charAt(0).toLowerCase()) {
       return "Invalid word";
     }
   
     return 'i' + word;
   }
