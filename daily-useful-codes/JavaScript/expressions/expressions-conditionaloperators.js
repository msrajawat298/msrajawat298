function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00';
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(1));
// expected output: "$2.00"
