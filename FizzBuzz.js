//Write a fizzbuzz() function that takes in a number, n, and returns an array of the numbers from 1 to n. For multiples of three, use "Fizz" instead of the number, and for the multiples of five, use "Buzz". For numbers that are multiples of both three and ifve, use "FizzBuzz" (capitilization matters). 

function fizzbuzz(n) {
    let result = []
    for (let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            result.push("FizzBuzz")
        } else if (i % 3 === 0){
            result.push("Fizz")
        } else if (i % 5 === 0){
            result.push("Buzz")
        } else { 
            result.push(i)
        }
    }
    return result;
}