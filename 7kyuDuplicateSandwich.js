//In this kata you will be given a list consisting of unique elements except for one thing that appears twice. Your task is to output a list of everything inbetween both occurrences of this element in the list.

function duplicateSandwich(a) {
    for (let i = 0; i < a.length; i++) {
      const firstIndex = i;
      const secondIndex = a.indexOf(a[i], i + 1);
      if (secondIndex !== -1) {
        return a.slice(firstIndex + 1, secondIndex);
      }
    }
  }

//solution 2 
function duplicateSandwich(a) {
  for (let i = 0; i < a.length - 1; i++)
    if (a.indexOf(a[i]) !== a.lastIndexOf(a[i]))
      return a.slice(a.indexOf(a[i]) + 1, a.lastIndexOf(a[i]));
}