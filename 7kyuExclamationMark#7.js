//Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

function remove (string) {
    return string.split(" ").filter(string => string.split("!").length - 1 !== 1).join(" ");
}