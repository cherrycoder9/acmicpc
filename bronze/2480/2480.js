const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    const N = parseInt(input[0], 10);
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += parseInt(input[i], 10);
    }
    console.log(sum);
});

// * 푸는중 