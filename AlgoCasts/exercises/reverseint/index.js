// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 2:
function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;


// Solution 1:
/*
function reverseInt(n) {
    let isNegative = false;
    if (n < 0) {
        n *= -1;
        isNegative = true;
    }

    let reverseNumber = parseInt(n.toString().split('').reverse().join(''));

    return isNegative ? reverseNumber * -1 : reverseNumber;
}
*/