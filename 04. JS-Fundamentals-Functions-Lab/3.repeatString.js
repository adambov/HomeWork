// Write a function that receives a string and a repeat count n. 
//The function should return a new string (the old one repeated n times).
// Hints
// 1.	Use a loop or another method to repeat the input string.
// 2.	Use the return operator to produce the result.

function repeatNTimes(str, num) {
    let newStr = '';
    for (let i = 0; i < num; i++) {
       newStr += str; 
    }
    // console.log(newStr);
    return newStr;
};

console.log(repeatNTimes("abc", 3));
console.log(repeatNTimes("String", 2));
