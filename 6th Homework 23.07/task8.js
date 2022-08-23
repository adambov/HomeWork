//Write a Python program to find the sequences of ONE upper case letter followed by lower case letters

let someRadnomText = 'some random text with ONE Upper Case letter followed by lower case letter.'

let regexp = /[A-Z][a-z]/g;

let matches = someRadnomText.match(regexp);

console.log(matches[0]);
console.log(matches[1]);