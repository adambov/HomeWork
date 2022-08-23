//Write a JS program that matches a string that has an a followed by three 'b'. 

let someRadnomText = 'some random text with a and abbb, abb, ba, bbba, aab, abbb'

let regexp = /ab{3}/g;


let matches = someRadnomText.match(regexp);

console.log(matches.length);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);