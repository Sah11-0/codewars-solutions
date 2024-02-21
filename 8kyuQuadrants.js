// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

function quadrant(x, y) {
    if (x > 0 && y > 0){
      return 1;
    } else if (x < 0 && y > 0) {
      return 2; 
    } else if (x < 0 && y < 0) {
      return 3;
    } else if (x > 0 && y < 0) {
      return 4;
    }
  }

//or

const quadrant = (x, y) => x > 0 && y > 0 ? 1 : x < 0 && y > 0? 2 : x < 0 && y < 0? 3 : x > 0 && y < 0? 4;
