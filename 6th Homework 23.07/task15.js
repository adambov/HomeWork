// Write a js program where a string will start with a specific number.

let someRadnomText = 'some Random text with containing  with word word starting wiht number 1st, 2nd and 3rd'

let regexp = /[1,2,3][A-Za-z]+/g;

let matches = someRadnomText.match(regexp);

console.log(matches.length);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);
