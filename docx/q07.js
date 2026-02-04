const a = {};
const b = { key: "b" };
const c = { key: "c" };
//Any object key should be a string ; if an object doesn’t have the method
//toString , JS will convert the object to [object Object]
a[b] = 123;
a[c] = 456;

console.log(a[b]);