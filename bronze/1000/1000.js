// 입력 데이터를 처리할 변수를 선언
let input = '';

// stdin의 'data' 이벤트를 사용하여 입력을 읽음
process.stdin.on('data', (data) => {
    input += data;
});

// stdin의 'end' 이벤트를 사용하여 입력이 끝나면 처리
process.stdin.on('end', () => {
    const [a, b] = input.trim().split(' ').map(Number);
    const sum = a + b;
    console.log(sum);
});

// stdin의 종료를 기다림
process.stdin.resume();


// // 방법1
// const fs = require('fs');

// // 입력을 읽음
// const input = fs.readFileSync('/dev/stdin', 'utf8').trim();

// // 입력된 데이터를 공백을 기준으로 나누어 배열로 만듦
// const [a, b] = input.split(' ').map(Number);

// // 두 수를 더함
// const sum = a + b;

// // 결과 출력
// console.log(sum);

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
