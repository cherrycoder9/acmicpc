const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const saveList = [];

input = input.toUpperCase();
input.forEach(element => {
    for (element in saveList) {
        if (saveList[element] == null) {
            saveList[element] = 0;
            break;
        } else {
            saveList[element]++;
        }
    }
});