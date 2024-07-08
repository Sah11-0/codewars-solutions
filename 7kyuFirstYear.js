//Write a function that takes two arguments:
// An integer representing a month of the year (0-11, where 0 is January and 11 is December).
// An integer representing a day of the week (0-6, where 0 is Sunday and 6 is Saturday).
// The function should return an integer representing the first year, from 2014 to 2050, where the first day of the given month falls on the specified day of the week.
// If no such year can be found, the function should return 0.

function findYear(month, dayOfWeek){
    for (let year = 2014; year <= 2050; year++) {
    let date = new Date(year, month, 1)
    if (date.getDay() === dayOfWeek) {
        return year;
      }
    }
    return 0;
  }