var numObj = new Number(42);
console.log(typeof numObj);
// expected output: "object"

var num = numObj.valueOf();
console.log(num);
// expected output: 42

console.log(typeof num);
// expected output: "number"
