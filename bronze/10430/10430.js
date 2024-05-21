const fs = require('fs');
const input = fs.readFileSync('dev/stdin', 'utf8').trim();
const [a, b, c] = input.split(' ').map(Number);

const l1 = (a + b) % c;
const l2 = ((a % c) + (b % c)) % c;
const l3 = (a * b) % c;
const l4 = ((a % c) * (b % c)) % c;

console.log(l1);
console.log(l2);
console.log(l3);
console.log(l4);