// 1.	Add and Subtract
// Write a function, which changes the value of odd and even numbers 
// in an array of numbers. 
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position
// Output
// On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.
// ==============================================================================
//1. first for loop through the array - start from 0 to arr.legnth including.
  //2. Create condition to check if the number is even or odd.
  //3. by even numbers add to their value the index position
  //4. if the number is odd substract the index position
  //5. add all new nums to the newArr - print the new arr
  //6. calculate the sum of nums from the old arr - print it
  //7. calculate the sum of nums from the new arr - print it
  function solve(arr) {
    let oldArrSum = 0;
    let newArrSum = 0;
    for (let el of arr) {
      oldArrSum += el
    };
      for (let num = 0; num < arr.length; num++) {
        if (arr[num] % 2 === 0) {
          arr[num] += num;
        }else{
          arr[num] -= num;
        };
    };
    for (let i of arr) {
      newArrSum += i;
    };
    console.log(arr.join(' '));
    console.log(oldArrSum);
    console.log(newArrSum);


};
solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);

