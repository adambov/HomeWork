//Write a JS program that matches a string that has an a followed by zero OR one 'b'.
let someRadnomText = 'some random text with a and zero - a0bbbsomething, ab, smothinga0b a000bb, a0b.'

let regexp = /a(0|b)/g;


let matches = someRadnomText.match(regexp);

console.log(matches.length);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);
console.log(matches[3]);
console.log(matches[4]);

