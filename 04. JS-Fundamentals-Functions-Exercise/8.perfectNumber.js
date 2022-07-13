// 8. Perfect Number 
// Write a function that receives a number and checks if that number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
// That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// Output
// •	If the number is perfect, print: "We have a perfect number!"
// •	Otherwise, print: "It's not so perfect."
// Hint
// Equivalently, a perfect number is a number that is half the sum of all of its positive divisors 
//(including itself) => 6 is a perfect number because it is the sum of 1 + 2 + 3 
//(all of which are divided without residue).
// •	Read about the Perfect number here: https://en.wikipedia.org/wiki/Perfect_number

function perfectNum(num) {
    let divisorsArr = [];
    //1. трябва да кажа на функцията да започне да дели числото на всички числа в заден ред
    // ако е 6, се дели на 5,4,3,2,1 - това го правя с процентно делене
    //взимам на тези, които резултата е е 0 и ги довабвям в масив с числа
    // след това обхождам масива и проверявам дали сбора на числата в него е равен на инпут числото
    for (let index = num - 1; index > 0; index--) {
       let divisor = 0;
       if (num % index === 0) {
            divisor = index;
            divisorsArr.push(divisor);
       }
    }
    // console.log(divisorsArr)
    let divisorsSum = 0;
    for (let element of divisorsArr) {
        divisorsSum += element;
    }
    if (divisorsSum === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNum(6);
perfectNum(28);
perfectNum(1236498);

