// 3.Merge Arrays
// Write a function, which receives two string arrays and merges them into a third array.  
// •	If the index of the element is even, 
// add into the third array the sum of both elements at that index
// •	If the index of the element is odd, 
// add the concatenation of both elements at that index
// Input
// As input, you will receive two string arrays (with equal length).
// Output
// As output, you should print the resulting third array, each element separated by " - ".
///////////////////////////////////////////////////////////
// 1.forof loop to go through arr1
// 2.forof loop to go through arr2
// if/else condition to check if the index of arr1 & arr2 is odd or ever
// if index(arr1, and arr2) is even - sum elements and add then in arr3
// else concatinate elements and add them in arr3
// separate elements in arr3 with -
// print arr3 
function solve(arr1, arr2) {
    let arr3 = [];
    for (let el = 0; el < arr1.length; el++) {
            if (el % 2 === 0) {
                arr3.push(Number(arr1[el]) + Number(arr2[el]));
            } else {
                arr3.push(`${arr1[el]}${arr2[el]}`);
            };
        
    };
    console.log(arr3.join(' - '));
};

solve(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11']);
solve(['13', '12312', '5', '77', '4'],['22', '333', '5', '122', '44']);