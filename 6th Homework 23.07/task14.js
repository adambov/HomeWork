//Write a йс program to match a string that contains only upper and lowercase letters, numbers, and underscores.

let someRadnomText = 'some Random text with containing  -  only Upper and Lowercase letters, numbers5464, and under_scores.';

let regexp = /\w+/g;

let matches = someRadnomText.match(regexp);

console.log(matches.length);
console.log(matches[0]);