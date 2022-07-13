// Write a function that receives a single integer number n and prints nxn matrix with that number.

function solve(num) {
    let outcome = '';
    for (let index = 0; index < num; index++) {
       for (let k = 0; k < num; k++) {
            outcome += num + ' ';
       }
       outcome += '\n';
};
    console.log(outcome);
    

    
    
    
};
solve(3);
solve(7);
solve(2);
