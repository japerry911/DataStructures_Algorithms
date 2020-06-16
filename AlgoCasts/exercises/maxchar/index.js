// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution 2:
function maxChar(str) {
    const holdingObject = {};
    let max = 0;
    let maxKey = undefined;

    for (let char of str) {
        if (holdingObject[char] === undefined) {
            holdingObject[char] = 1;
        } else {
            holdingObject[char]++;
        }
    }

    for (let key in holdingObject) {
        if (holdingObject[key] > max) {
            max = holdingObject[key];
            maxKey = key;
        }
    }

    return maxKey;
}

module.exports = maxChar;


// Solution 1:
/*
function maxChar(str) {
    const holdingObject = {};

    for (let i = 0; i < str.length; i++) {
        if (holdingObject[str[i]] === undefined) {
            holdingObject[str[i]] = 1;
        } else {
            holdingObject[str[i]]++;
        }
    }

    keys = Object.keys(holdingObject);
    let maxValue = [0, undefined];
    for (let i = 0; i < keys.length; i++) {
        if (holdingObject[keys[i]] > maxValue[0]) {
            maxValue[0] = holdingObject[keys[i]];
            maxValue[1] = keys[i];
        }
    }
    
    return maxValue[1];
}
*/