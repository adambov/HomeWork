//Write a js program that matches a string that has an 'a' followed by anything, ending in 'b'.

let someRadnomText = 'some random text with a followed by anythingEndingOnB _b a?b a_b  a sometingb a!b.'

let regexp = /\ba(\w+|\S)(b\b|B\b)/g;

let matches = someRadnomText.match(regexp);

console.log(matches.length);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);
console.log(matches[3]);

