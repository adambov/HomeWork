//Write a JS program that matches a word at the beginning of a string.

let someRadnomText = 'some random text with a first matching word';

let regexp = /^\w+/g;

let matches = someRadnomText.match(regexp);

console.log(matches.length);
console.log(matches[0]);