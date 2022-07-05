// Write a program that 
// calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function solve(arr) {
    let arrOfNum = [];
    let sumEven = 0;
    let sumOdd = 0;
    let result = 0;

    arr.forEach(str => {
        arrOfNum.push(Number(str));
      });

    for (const num of arrOfNum) {
        if (num % 2 === 0){
            sumEven += num;
        }else{
            sumOdd += num;
        } 
    }
    // result = Math.abs(sumEven - sumOdd);
    result = sumEven - sumOdd;
    console.log(result);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);
