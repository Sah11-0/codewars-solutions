// Write a function take_umbrella() that takes two arguments: a string representing the current weather and a float representing the chance of rain today.
// Your function should return True or False based on the following criteria.
// You should take an umbrella if it's currently raining or if it's cloudy and the chance of rain is over 0.20.
// You shouldn't take an umbrella if it's sunny unless it's more likely to rain than not.

function takeUmbrella(weather, chance) {
    if (weather === 'rainy') {
      return true;
    } else if (weather === 'cloudy' && chance > 0.20) {
      return true;
    } else if (weather === 'sunny' && chance > 0.50) {
      return true;
    } else {
      return false;
    }
  }
  