// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const returnArray = [];
    for (let i = 0; i < n; i++) {
        returnArray.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i <= endColumn; i++) {
            returnArray[startRow][i] = counter;
            counter++;
        }

        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            returnArray[i][endColumn] = counter;
            counter++;
        }

        endColumn--;

        for (let i = endColumn; i >= startColumn; i--) {
            returnArray[endRow][i] = counter;
            counter++;
        }

        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            returnArray[i][startColumn] = counter;
            counter++;
        }

        startColumn++;
    }

    return returnArray;
}

module.exports = matrix;

// Solution 1:
/*
function matrix(n) {
    const returnArray = [];
    for (let i = 0; i < n; i++) {
        returnArray.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i < endColumn + 1; i++) {
            returnArray[startRow][i] = counter;
            counter++;
        }

        startRow++;

        for (let i = startRow; i < endRow + 1; i++) {
            returnArray[i][endColumn] = counter;
            counter++;
        }

        endColumn--;

        for (let i = endColumn; i >= startColumn; i--) {
            returnArray[endRow][i] = counter;
            counter++;
        }

        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            returnArray[i][startColumn] = counter;
            counter++;
        }

        startColumn++;
    }

    return returnArray;
}
*/