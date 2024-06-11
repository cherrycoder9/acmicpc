const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

const count = {};
for (const char of input) {
    if (count[char]) {
        count[char]++;
    } else {
        count[char] = 1;
    }
}

let maxCount = 0;
let maxChar = '?';
let duplicate = false;

for (const char in count) {
    if (count[char] > maxCount) {
        maxCount = count[char];
        maxChar = char;
        duplicate = false;
    } else if (count[char] === maxCount) {
        duplicate = true;
    }
}

console.log(duplicate ? '?' : maxChar);
