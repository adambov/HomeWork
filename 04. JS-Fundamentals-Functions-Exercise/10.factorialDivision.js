// 10. Factorial Division
// Write a function that receives two integer numbers. 
// Calculate the factorial of each number. 
// Divide the first result by the second and print the division formatted to the second decimal point.
// Hints
// •	Read more about factorial here: https://en.wikipedia.org/wiki/Factorial
// •	You can use recursion

function factorialDivisonTwoNums(firstNum, secondNum) {
    function factorialCalc(num){
        let result = 1;
        while (num != 1) {
            result *= num;
            num -= 1;
        };
        return result;
    }
   
    let firstNumFactorial = factorialCalc(firstNum);
    let secondNumFactorial = factorialCalc(secondNum);
    
    let finalResult = firstNumFactorial / secondNumFactorial;

    console.log(finalResult.toFixed(2));
}
factorialDivisonTwoNums(5, 2);
factorialDivisonTwoNums(6, 2);
