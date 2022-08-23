//Write a JS program that matches a string that has an a followed by one or more b's.

let someRadnomText = 'some random text with a followed by one or more b ab, abbbbb, adsbsbb'

let regexp = /ab{1,}/g;


let matches = someRadnomText.match(regexp);

console.log(matches.length);
console.log(matches[0]);
console.log(matches[1]);

