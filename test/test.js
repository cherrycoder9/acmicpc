
let obj = { a: 'hi', b: 1234, c: 'hahahoho' };
for (const mykey in obj) {
    console.log(mykey, obj[mykey]);
}

let soso = [1, 3, 5, 7, 9, 11, 13];
soso.forEach((element) => {
    console.log(element);
});
for (const e of soso) {
    console.log(e);
}