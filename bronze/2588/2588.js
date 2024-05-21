const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const [a, b] = input.split('\n');
const numA = Number(a);
const numB = Number(b);

const b1 = Number(b[2]);
const b2 = Number(b[1]);
const b3 = Number(b[0]);

const line1 = numA * b1;
const line2 = numA * b2;
const line3 = numA * b3;
const line4 = numA * numB;

console.log(line1);
console.log(line2);
console.log(line3);
console.log(line4);
