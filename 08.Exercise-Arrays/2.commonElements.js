// Write a function, which prints common elements in two string arrays. 
// Print all matches on separate lines. 
// Compare the first array with the second array.

//1. for loop to go through arr1.legth 
//2. for loop to go through arr2.legth 
//3. take the matches 
//4. print them on separate lines
function solve(arr1, arr2) {
    for (let el of arr1) {
        for (let sym of arr2) {
            if (el === sym) {
                console.log(el) 
            };
        };
    };
};

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],['s', 'o', 'c', 'i', 'a', 'l']);
