//Write a js program that matches a string that has an a followed by two to three 'b'.

let someRadnomText = 'some random text with a and 2 to three b ab, ba abb, abbb, abbbb'

let regexp = /ab{2,3}/g;


let matches = someRadnomText.match(regexp);

console.log(matches.length);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);