// const map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
// console.log(map);

// const iterator = map.keys();
// console.log(iterator);

// for (const key of iterator) {
//     console.log(key); // 'a', 'b', 'c'
// }

// const array = [1, 2, 3];
// const arrayIterator = array.keys();
// console.log(arrayIterator); // Array Iterator { 0, 1, 2 }

// const mis = "mississipi".toUpperCase();
// const a = [...mis];
// console.log(a);
// console.log(a.length);

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

let numbers = [10, 20, 30, 40, 50];

let filteredNumbers = numbers.filter((number, index, array) => {
    console.log(`number: ${number}, index: ${index}, array: ${array}`);
    return number > 20;
});

console.log(filteredNumbers); // [30, 40, 50]