const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();

// 속성;
// size: 맵에 저장된 요소의 개수를 반환함.
// 메서드;
// set(key, value): 맵에 주어진 키와 값을 설정함.맵 객체 자체를 반환함.
// get(key): 주어진 키에 해당하는 값을 반환함.키가 맵에 존재하지 않으면 undefined를 반환함.
// has(key): 주어진 키가 맵에 존재하면 true, 그렇지 않으면 false를 반환함.
// delete(key): 주어진 키에 해당하는 요소를 맵에서 삭제함.삭제 성공 시 true, 실패 시 false를 반환함.
// clear(): 맵의 모든 요소를 제거함.
// keys(): 맵 객체의 모든 키를 포함하는 새로운 Iterator 객체를 반환함.
// values(): 맵 객체의 모든 값을 포함하는 새로운 Iterator 객체를 반환함.
// entries(): 맵 객체의 모든[키, 값] 쌍을 포함하는 새로운 Iterator 객체를 반환함.
// forEach(callback, thisArg): 맵 객체의 각 요소에 대해 한 번씩 주어진 콜백 함수를 실행함.콜백 함수는 3개의 인수(값, 키, 맵 객체)를 받음.thisArg는 콜백 함수 내부에서 사용될 this 값을 설정함.
// [Symbol.iterator](): Map 객체 자체를 반복할 수 있는 이터레이터를 반환함

const countMap = new Map();

