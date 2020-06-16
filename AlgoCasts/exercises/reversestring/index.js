// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 3:
function reverse(str) {
    return str.split('').reduce((accumulator, currentCharacter) => currentCharacter + accumulator, '');
}

module.exports = reverse;

// Solution 1:
/*
function reverse(str) {
    return str.split('').reverse().join('');
}
*/

// Solution 2:
/*
function reverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
*/