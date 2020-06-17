// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

// Solution 2:
function pyramid(n, row=0, pyramidRow='') {
    if (n === row) {
        return;
    }

    if (((n - 1) * 2) + 1 === pyramidRow.length) {
        console.log(pyramidRow);
        return pyramid(n, row + 1);
    }

    const min = n - row - 1;
    const max = n + row - 1;

    if (pyramidRow.length >= min && pyramidRow.length <= max) {
        pyramidRow += '#';
    } else {
        pyramidRow += ' ';
    }

    pyramid(n, row, pyramidRow);
}

pyramid(2);

module.exports = pyramid;

// Solution 1: 
/*
function pyramid(n) {
    const rowLength = ((n - 1) * 2) + 1;

    for (let i = 0; i < n; i++) {
        let pyramidRow = '';
        for (let r = 0; r < rowLength; r++) {
            const min = n - i;
            const max = n + i;

            if (r + 1 >= min && r + 1 <= max) {
                pyramidRow += '#';
            } else {
                pyramidRow += ' ';
            }
        }

        console.log(pyramidRow);
    }
}
*/