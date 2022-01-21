let numbers = [1,2,7,1,4,3];
let max = numbers[0];
for( let i = 0; i < numbers.length; i++) {
    let num = numbers[i]
    if(num > max){
    max = num
 }
}
console.log(`The max of ${numbers} is ${max}`);



