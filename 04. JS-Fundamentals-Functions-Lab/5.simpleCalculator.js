// 5. Simple Calculator
// Write a function that receives three parameters – 
//two numbers and an operator (string) – and calculates the result depending on the operator. 
//Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions.
// Bonus
// Solve this task without using any conditional statements 
//(no if or switch statements or ternary operators).
// Input
// The input comes as parameters named numOne, numTwo, operator.
// Hints
// •	Use a switch statement for the different operators.
/////////////////////////////////1st solution//////////////////////////////////
// function calculator(num1,num2, operator) {
//     let result = 0;
//     switch (operator) {
//         case 'multiply': 
//             result = num1 * num2;
//             break;
//         case 'divide':
//             result = num1 / num2;
//             break;
//         case 'add':
//             result = num1 + num2;
//             break;
//         case 'subtract':
//             result = num1 - num2;
//             break;
//     };
//     return result;
// };
// console.log(calculator(5,5,'multiply'));
// console.log(calculator(40,8,'divide'));
// console.log(calculator(12,19,'add'));
// console.log(calculator(50,13,'subtract'));
/////////////////////////////////2nd solution//////////////////////////////////
let calculator = (num1,num2, operator) => {
    let result = 0;
    switch (operator) {
        case 'multiply': 
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
    };
    return result;
};

console.log(calculator(5,5,'multiply'));
console.log(calculator(40,8,'divide'));
console.log(calculator(12,19,'add'));
console.log(calculator(50,13,'subtract'));
