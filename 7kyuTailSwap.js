// DESCRIPTION:
// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.
// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

function tailSwap(arr) {
    const [firstString, secondString] = arr;
    const [firstBeforeColon, firstAfterColon] = firstString.split(':');
    const [secondBeforeColon, secondAfterColon] = secondString.split(':');
    const newFirstString = `${firstBeforeColon}:${secondAfterColon}`;
    const newSecondString = `${secondBeforeColon}:${firstAfterColon}`;
    return [newFirstString, newSecondString];
  }