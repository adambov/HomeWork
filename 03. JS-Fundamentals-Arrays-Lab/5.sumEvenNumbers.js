// Write a program, which receives an array of strings, 
// parse them into numbers, and sum only the even numbers.

function sumEven(arrOfStr) {
    let arrOfNum = [];
    let result = 0;
    arrOfStr.forEach(str => {
        arrOfNum.push(Number(str));
      });
    // console.log(arrOfNum); 
    for (let num of arrOfNum) {
        
        if (num % 2 === 0) {
            result += num;
        }
               
    }  
    console.log(result); 
    // for (let i = 0; i < arr.length; i++) {
    //         arr[i] = Number(arr[i]);
    // }
    
    // for (let num of arr) {
    //     let result = 0;
    //     if (num % 2 === 0) {
    //         result += num;
    //     }
    // console.log(result); 
    };
// };

sumEven(['1','2','3','4','5','6']);
sumEven(['3','5','7','9']);
sumEven(['2','4','6','8','10']);