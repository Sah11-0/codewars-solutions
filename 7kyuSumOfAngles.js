//Find the total sum of internal angles (in degrees) in an n-sided simple polygon.
//N will be greater than 2.

function angle(n) {
    if (n < 2){
      return 'not valid'
    } else {
      return (n-2) * 180
    }
}