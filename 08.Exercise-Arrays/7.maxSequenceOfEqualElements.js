// 7.	Max Sequence of Equal Elements
// Write a function that finds the longest sequence of equal elements in an array of numbers. 
// If several longest sequences exist, print the leftmost one.
////////////////////////////////////////////////////////////////////////////////
//1. make a mirror arr (sorted_arr) and sort it -     let sortedArr = arr.slice().sort();
//2. you will recieve sortedArr 
//3. for loop from 0 to arr.legth - to go through all the indexes
//4. nested for loop to go through each index value and connect it with the index value of the first for loop
// - now I have to say compare the numbers

//6.  from now on I have to take the most repated number 


function solve(arr) {
    let newArr = [];
    let secondaryArr = [];
    // console.log(arr);
    for (let i = 0; i < arr.length ; i++) {
        // console.log(arr[i]);
        secondaryArr = [];
        for (let j = i; j < arr.length ; j++) {
            // console.log(arr[j]);
            if (arr[i] === arr[j]){
                secondaryArr.push(arr[j]);
            }else{
                break;
            };
            if (secondaryArr.length > newArr.length) {
                newArr = secondaryArr;  
            }
        }
    }
    console.log(newArr.join(' '));
};

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
