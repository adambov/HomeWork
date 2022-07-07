// 8.	Magic Sum
// Write a function, which prints all unique pairs in an array of integers 
//whose sum is equal to a given number. 
//////////////////////////////////////////////////////
// - have to go through the arr with for loop
// - create a second for loop, 
// with it go through the arr and sum each value wiht the current value from the firts loop
// store each current value and compare it wiht the given num
// if it is equal print the two values that made it
function solve(arr, givenNumber) {
    let currentSum = 0;
    for (let index = 0; index < arr.length; index++) {
        currentSum = 0;
        for (let j = index + 1; j < arr.length; j++) {
            currentSum = arr[index] + arr[j];

            if (currentSum === givenNumber) {
                console.log(`${arr[index]} ${arr[j]}`);
            }
        }
    }
    
};
solve([1, 7, 6, 2, 19, 23],8);
solve([14, 20, 60, 13, 7, 19, 8],27);
solve([1, 2, 3, 4, 5, 6], 6);
