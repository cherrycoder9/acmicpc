const input = fs.readFileSync('/dev/stdin').trim();
const [a, b, c] = input.split(' ').map(Number);

if (a == b && b == c) {
    console.log(10000 + a * 1000);
} else if (a != b && b != c) {
    console.log(compareSize([a, b, c]) * 100);
} else {
    if (a == b) {
        console.log(1000 + a * 1000);
    } else if (b == c) {
        console.log(1000 + b * 1000);
    } else if (a == c) {
        console.log(1000 + c * 1000);
    }
}


function compareSize(numArray) {
    let largestNum = numArray[0];
    largestNum = largestNum < numArray[1] ? numArray[1] : largestNum;
    largestNum = largestNum < numArray[2] ? numArray[2] : largestNum;

    return largestNum;
}