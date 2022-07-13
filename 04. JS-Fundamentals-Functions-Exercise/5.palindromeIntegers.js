// 5. Palindrome Integers
// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. 
//Write a function, which receives an array of positive integers and checks:
//if each integer is a palindrome or not.
// Output
// •	If the current integer is a palindrome, print: "true"
// •	Otherwise, print: "false"

function palindromeNum(numArr) {
    let outcome;
    // console.log(numArr);
    //1. iterate through the numArr
    //2. create a currentArr which will take each number and turn it to an arr
    // - for this turn currentArr into arr with each digit of num
    //3. iterate through the currentArr
    //4 and check if digits starting from forwards are the same as starting backwards
    for (let i = 0; i < numArr.length; i++) {
        let currentArr = [];
        currentArr.push(numArr[i]);
        currentArr = currentArr.map(Number).join('');
        currentArr = currentArr.split("").map(Number);
        
        // console.log(currentArr);

        // console.log(typeof(currentArr[i]));
       for (let k = 0; k < currentArr.length; k++) {
            if (currentArr[0] === currentArr[currentArr.length - 1]) {
                outcome = true
            } else {
                outcome = false
            }
       }
       if (outcome) {
        console.log(true);
       } else {
        console.log(false);
       }
     };
};

palindromeNum([123,323,421,121]);
palindromeNum([32,2,232,1010]);
