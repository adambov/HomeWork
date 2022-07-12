// 6. Sign Check
// Write a function, that checks whether the result of the multiplication 
//numOne * numTwo * numThree is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.
// Input
// The input comes as parameters named numOne, numTwo, numThree.
// Output
// •	If the result is positive, print on the console -> "Positive"
// •	Otherwise, print -> "Negative"
// Hints
// •	Consider how the sign of each of the three input parameters will affect their product.
// •	Check all the different combinations for the three numbers.
/////////////////////////////////////////1st solution/////////////////////////////////////////////////
function multiplication(num1, num2,num3) {
    let outcome = '';
    if (num1 > 0 && num2 > 0 && num3 > 0) { // +num1, +num2, +num3
        outcome = 'Positive';
    } else if (num1 < 0 && num2 < 0 && num3 < 0){ // ----num1, ----num2, -----num3
        outcome = 'Negative';
    } else if (num1 < 0 && num2 > 0 && num3 > 0){// ----num1, +num2, +num3
        outcome = 'Negative';
    } else if (num1 < 0 && num2 < 0 && num3 > 0){// ----num1, -----num2, +num3
        outcome = 'Positive';
    } else if (num1 < 0 && num2 > 0 && num3 < 0){// ----num1, +num2, -----num3
        outcome = 'Positive';
    } else if (num1 < 0 && num2 > 0 && num3 < 0){// +num1, ------num2, -----num3
        outcome = 'Positive';
    } else if (num1 > 0 && num2 > 0 && num3 < 0){// +num1, +num2, -----num3
        outcome = 'Negative';
    }

    console.log(outcome);
};
//////////////////////////////////2nd solution//////////////////////////////////
// function multiplication(num1, num2,num3) {
//     let result = Math.sign(num1 * num2 * num3);
//     let outcome = '';
    
//     if (result === 1) {
//         outcome = 'Positive';
//     } else {
//         outcome = 'Negative';
//     }
//     console.log(outcome);
// }

multiplication(5,12,-15);
multiplication(-6,-12,14);
multiplication(-1,-2,-3);
multiplication(-5,1,1);
multiplication(-5,6,-1);
