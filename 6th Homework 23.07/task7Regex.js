//Write a js program to find sequences of lowercase letters joined with a underscore.

let someRadnomText = 'some random text with an under_score, a_s';

let regexp = /[a-z]_[a-z]/g; //\w+_\w+

let matches = someRadnomText.match(regexp);

console.log(matches[0]);
console.log(matches[1]);
