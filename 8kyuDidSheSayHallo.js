//Write a simple function to check if the string contains the word hallo in different languages.These are the languages of the possible people you met the night before:
//hello - english
//ciao - italian
//salut - french
////hallo - german
////hola - spanish
////ahoj - czech republic
////czesc - polish
//you can assume the input is a string.
//function should be case insensitive to pass the tests

function validateHello(greetings) {
    const greetWord = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
    let lettersOnly = '';
    for (let i = 0; i < greetings.length; i++) {
      const char = greetings[i];
      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        lettersOnly += char;
      }
    }
    for (let i = 0; i < greetWord.length; i++) {
      if (lettersOnly.toLowerCase().includes(greetWord[i])) {
        return true;
      }
    }
    return false;
  }