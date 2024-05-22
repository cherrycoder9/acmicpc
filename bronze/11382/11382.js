const fs = require('fs');
const input = fs.readFileSync('dev/stdin', 'utf8').trim();
const [a, b, c] = input.split(' ').map(Number);
console.log(a + b + c);