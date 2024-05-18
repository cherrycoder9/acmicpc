// 방법1
const fs = require('fs');

// 입력을 읽음
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();

// 입력된 데이터를 공백을 기준으로 나누어 배열로 만듦
const [a, b] = input.split(' ').map(Number);

// 두 수를 더함
const sum = a + b;

// 결과 출력
console.log(sum);

// 방법 2
// const readline = require('readline');

// // 인터페이스 생성
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // 입력을 처리하는 코드
// rl.question('', (input) => {
//     const [a, b] = input.split(' ').map(Number);
//     const sum = a + b;
//     console.log(sum);
//     rl.close();
// });
