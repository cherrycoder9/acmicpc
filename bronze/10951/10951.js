const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach(line => {
    const [a, b] = line.split(' ').map(Number);
    console.log(a + b);
});