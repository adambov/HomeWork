//Write a js program that matches a word containing 'z', not at the start or end of the word. 

let someRadnomText = 'some random text with containing z - zero zeppelin herzlich heinz some other Z things listed';

let regexp = /\wz\w/g;

let matches = someRadnomText.match(regexp);

console.log(matches.length);
console.log(matches[0]);
