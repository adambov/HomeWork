/* Write a program that prints the next n odd numbers (starting from 1) 
and on the last row prints the sum of them.


You will receive a number – n. This number shows how many odd numbers you should print.

Print the next n odd numbers, starting from 1, separated by newlines.
On the last line, print the sum of these numbers in the following format: `Sum: {total sum}`

*/

// function oddNums(n){
//     let counter = 0;
//     let i = 0;
//     let sum = 0;
//     while (counter <= n + 1){
//         i++;
//         counter++;
//         if (i % 2 !== 0){
//             sum += i;
//             console.log(i)
//         }
//     }
//     console.log(`Sum: ${sum}`)
// }

function oddNums(n){
    let i = 0;
    let sum = 0;
   for (let counter = 1; counter <= 100; counter++){
    i++;
    if (i % 2 !== 0){
        console.log(i)
        sum += i;
        if (counter > n + 1 ){
            break;
        }
    }
   }
   console.log(`Sum: ${sum}`)
}

oddNums(5);
/*
първо трябва да задам на цикъл да се върти толкова пъти колкото е N - 
след това да смята всяко взето число и да го принтира ако е нечетно
когато броя на числата е равен на n да спре цикъла и да им сметне сбора 
*/


