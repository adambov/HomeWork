// var sum = 0;
// for ( var x = 1; x <= 10 ; x++ ){
// 	sum += x ;
// };
// console.log("sum = " + sum);


let numbers = [-2, 3, 7, 8, -1, 4, 2];
sum=0
for (let i = 0; i <= numbers.length; i++){
    if(numbers[i] > 0 && numbers[i] % 2 === 0)
    sum +=i; 
}
console.log(sum)
