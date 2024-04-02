// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

function isItLetter(character) {
    if (typeof character !== 'string' || character.length !== 1) {
          return false;
        }
    character = character.toLowerCase();
    return character >= 'a' && character <= 'z';
  }