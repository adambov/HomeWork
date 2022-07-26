
// Given is the next array of numbers: [1,2,3,4,5,6,7,8,9,10]
// Write a program which will output in the console the sum of the squares of even numbers

let arr = [1,2,3,4,5,6,7,8,9,10];
//////////solution 1/////////////////////
// function solve(arr) {
//     let arr2 = [];
//     let sum = 0;
//     let power = 0;
//     for (let num of arr) {
//         if (arr[num] % 2 === 0) {
//             arr2.push(arr[num]);
//         }
//     };
//     for (let num2 of arr2) {
//         power = num2*num2;
//         sum += power;
//     };
//     console.log(sum);

// }

///////////////////// 2nd solution ////////////////////
// let solve = arr.filter( x => x%2 === 0);
// let squared = solve.map(number => number*number);
// let squaredSum = squared.reduce((acc,curr) => acc + curr);

// console.log(squaredSum);

/////////////////////3th solution /////////////////////
let solve = arr.filter( x => x%2 === 0);
let squaredSum = solve.reduce((acc,curr) => acc + (curr*curr),0);

console.log(solve);
console.log(squaredSum);