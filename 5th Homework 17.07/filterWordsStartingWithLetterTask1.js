
// Given is the next Douglas Adams quote:
// 'A common mistake that people make when trying 
// to design something completely foolproof is to underestimate the ingenuity of complete fools.'

// Make a program, which will write in the console only the words that 
// starts with letter 't' and are longer than 2 symbols

//expected output
// that
// trying
// the

let sentanse = 'A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.';


let words = sentanse.split(' ');
////////////////1st old school slution////////////////////////
// let chars = sentanse.split('');
// console.log(words);
// console.log(words[1][2]);
// console.log(chars);
// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 2 && words[i][0] === 't') {
//         console.log(words[i]);
//     }
    
// };
//////////////////////2nd new filtered solution//////////////////////
let filtered = words.filter(letters => letters.length > 2 && letters[0] === 't');

console.log(`${filtered.join('\n')}`);




