const fs = require('fs');
const input = fs.readFileSync('dev/stdin', 'utf8').trim();
const b_years = Number(input) - 543;
console.log(b_years);