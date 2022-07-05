// Write a function that receives an array of numbers 
// and prints the sum of the first and last element in that array.

function sumFirstLast(input) {
    let first = input[0];
    let last = input[input.length-1];
    console.log(first+last);
    // return result;
};

sumFirstLast([20, 30, 40]);
sumFirstLast([10, 17, 22, 33]);
sumFirstLast([11, 58, 69]);