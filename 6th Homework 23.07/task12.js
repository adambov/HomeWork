//Write a js program that matches a word containing 'z'.


let someRadnomText = 'some random text with containing z - zero zeppelin herzlich heinz some other Z things listed';

let regexp = /z\w+/g;

let matches = someRadnomText.match(regexp);

console.log(matches.length);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);
console.log(matches[3]);
console.log(matches[4]);
