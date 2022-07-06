// 4.	Array Rotation
// Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.
// Output
// Print the resulting array elements separated by a single space.
////////////////////////////////////////////////////////

//1. for loop for arr till rotation.
//2. for each roation take first element and save it in a value
//3. let newArr = [];
//4. use push to add it at the end of the newArr
//5. print the newArr

function solve(arr, rotation) {
    let newArr = arr;
    for (let i = 0; i < rotation; i++) {
        let firstElement = newArr.shift();
        newArr.push(firstElement);
        
    }
    console.log(newArr.join(' '));
};

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);
