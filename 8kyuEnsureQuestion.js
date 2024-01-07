//Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.


function ensureQuestion(s) {
    if (s.includes('?')) {
      return s;
    } else {
      return `${s}?`;
    }
  }

  //or

  function ensureQuestion(s) {
    return s.includes('?') ? s : `${s}?`;
  }

  //or

  const ensureQuestion = s => s.endsWith('?') ? s : s + '?'