const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const [a, b] = input.split(' ').map(Number);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);