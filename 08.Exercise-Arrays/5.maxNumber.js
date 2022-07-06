// 5.	Max Number
// Write a function to find all the top integers in an array. 
// A top integer is an integer, which is bigger than all the elements to its right. 
// Output
// Print all top integers on the console, separated by a single space.
/////////////////////////////////
//let topnum = 0;
//let topnumbers = [];
//1. for loop to go through the arr(backwards)!
// compare the value of each index with the indexes forwards
// if the value of the index is bigger than the ones before add it in topnumber
// this created topnumber arr wiht all higher values.
// now I have to order them by size
// then I have to remove duplicated values


function solve(arr) {
    let topnum = 0;
    let topnumbers = [];
  for (let index = arr.length; index >= 0; index--) {
    if (arr[index] >= topnum){
        topnum = arr[index] ;
        topnumbers.push(topnum);
    }
    
};
let newTopnumbers = [...new Set(topnumbers)];
    console.log(newTopnumbers.reverse());
};

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);