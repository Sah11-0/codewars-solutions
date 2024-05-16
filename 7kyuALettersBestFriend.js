//Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter. All sentences will be given in lowercase.

function bestFriend(txt, a, b) {
    for(let i = 0; i < txt.length - 1; i++) {
      if (txt[i] === a && txt[i + 1] !== b) {
        return false;
      }
    }
   if (txt[txt.length - 1] === a) {
          return false;
      }
      return true;
  }