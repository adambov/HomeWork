// 2. Add and Subtract
// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers and a function subtract(), 
// which subtracts the result of the function the sum() and the third integer.

function sum(num1, num2, num3) {
    let sumResult = num1 + num2;
    function subtract() {
        let subtractResult = sumResult - num3;
        return subtractResult;
    };
    console.log(subtract());
};


sum(23,6,10);
sum(1,17,30);
sum(42,58,100);