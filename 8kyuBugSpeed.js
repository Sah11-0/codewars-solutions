// Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored). Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function bugSpeed(s) {
    return Math.floor(s * 27.7778);
}

//or

const bugSpeed = s => Math.floor(s / 0.036);