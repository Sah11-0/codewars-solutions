// This function should take two string parameters: a person's name (name) and a quote of theirs (quote), and return a string attributing the quote to the person in the following format:

// '[name] said: "[quote]"'

function quotable(name, quote){
    return name + ' said: "' + quote + '"'
  }

  //or

  function quotable(name, quote){
    return `${name} said: "${quote}"`;
  }