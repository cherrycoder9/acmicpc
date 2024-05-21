const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const [a, b] = input.split(' ');

console.log(+a * +b[0]);
console.log(+a * +b[1]);
console.log(+a * +b[2]);
console.log(+a * +b);
