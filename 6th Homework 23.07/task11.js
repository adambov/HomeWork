//Write a js program that matches a word at the end of string, with optional punctuation.

let someRadnomText = 'some random text with a last matching word with optional punctuation!';

let regexp = /\w+\W*$/g; //\w+\S*$

let matches = someRadnomText.match(regexp);

console.log(matches.length);
console.log(matches[0]);