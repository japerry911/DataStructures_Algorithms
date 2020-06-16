/*
Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and
for the multples of five print "Buzz". For numbers which are multiple of both three and five print "FizzBuzz".
*/

function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
}

FizzBuzz();