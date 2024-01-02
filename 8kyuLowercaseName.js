//If the winner is George Saint Pierre he will obviously say: "I am not impressed by your performance." If the winner is Conor McGregor he will most undoubtedly say: "I'd like to take this chance to apologize.. To absolutely NOBODY!"
//The given name may varies in casing, eg., it can be "George Saint Pierre" or "geOrGe saiNT pieRRE". Your solution should treat both as the same thing (case-insensitive).

var quote = function(fighter) {
    let lowerCaseFighter = fighter.toLowerCase();
    
    if (lowerCaseFighter  === "george saint pierre"){
      return "I am not impressed by your performance."
    } else if (lowerCaseFighter === "conor mcgregor"){
      return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    }
  };