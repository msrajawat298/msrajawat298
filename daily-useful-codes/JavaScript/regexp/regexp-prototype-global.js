var regex1 = new RegExp('foo', 'g');

console.log(regex1.global);
// expected output: true

var regex2 = new RegExp('bar', 'i');

console.log(regex2.global);
// expected output: false
