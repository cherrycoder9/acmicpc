const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const saveList = [];

// 입력값을 전부 대문자로 변환한다 
input = input.toUpperCase();
// input 배열을 순회하면서 조건을 처리한다 
input.forEach(element => {
    const hasKey = saveList.some(k => k.key === element);
    // input[i]의 알파벳이 saveList 배열에 없으면 saveList에 속성을 추가하고 값은 0을 부여한다 
    for (e in saveList) {
        if (e == null) {
            saveList.push({ e: 0 });
            break;
        } else if (element == e) {
            saveList.e++;
        }
    }
    // input[i]의 알파벳이 saveList 배열에 있으면 해당하는 객체의 값을 +1 한다 

});