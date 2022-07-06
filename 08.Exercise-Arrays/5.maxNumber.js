// 5.	Max Number
// Write a function to find all the top integers in an array. 
// A top integer is an integer, which is bigger than all the elements to its right. 
// Output
// Print all top integers on the console, separated by a single space.
/////////////////////////////////
//1. forof through the arr.
// let topnum = 0;
// 2. if index[0] is bigger than all next indexes, index[0] = topnum 
// and so on this has to be checked for all nums
//3. print all the index[num] that are bigger that all afterwars
function solve(arr) {
    let topnum = 0;
    let topnumbers = [];
    for (let i = 0; i <= arr.length; i ++) {
        let currentElement = arr[i];
        let isTopInteger = true;

        if (i > i + 1){

        }
    };
    // console.log(topnum);
};

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);