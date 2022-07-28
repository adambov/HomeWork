//Write a JS program that matches a string that has an a followed by zero or more b's.
let someRadnomText = 'some random text with a and zero - ab a0bbbsomething, a0b, smothinga0b a0bb.'

let regexp = /a0b{2,}/g;

let matches = someRadnomText.match(regexp);

console.log(matches.length);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[4]);


