// 2. Math Power
// Write a function that calculates and print the value of a number raised to a given power:
// Hints
// •	Create a function that will have two parameters - the number and the power.
// •	Print the result to the console.

//1st solution/////////////////////////////////////////////////////////////////////
// function solve(a,b) {
//     console.log(Math.pow(a, b));
// };
//2nd solution///////////////////////////////////////////////////
function solve(a,b) {
    let result = 1;
    for (let i = 1; i <= b; i++) {
        result *= a;  
    };
    console.log(result);
}

solve(2,8);
solve(3,4);
solve(2,5984);

