
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
console.log(map);

const iterator = map.keys();
console.log(iterator);

for (const key of iterator) {
    console.log(key); // 'a', 'b', 'c'
}

const array = [1, 2, 3];
const arrayIterator = array.keys();
console.log(arrayIterator); // Array Iterator { 0, 1, 2 }
