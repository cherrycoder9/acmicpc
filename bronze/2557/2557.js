const fs = require('fs');
const input = fs.readFileSync('dev/stdin', 'utf8').trim();
const [a, b] = input.split(' ').map(Number);
console.log(a / b);