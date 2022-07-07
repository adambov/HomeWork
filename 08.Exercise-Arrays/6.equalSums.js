// Write a function that determines 
//if there exists an element in the array of numbers such that the sum of the elements 
// on its left is equal to the sum of the elements on its right. 
// If there are NO elements to the left/right, their sum is 0. 
// Print the index that satisfies the required condition or "no" if there is no such index.

// Input	         Output	      Comments
// [1, 2, 3, 3]	       2	       At a[2] -> left sum = 3, right sum = 3
// a[0] + a[1] = a[3]
// [1, 2]	no	At a[0] -> left sum = 0, right sum = 2
// At a[1] -> left sum = 1, right sum = 0
// No such index exists
// [1]	0	At a[0] -> left sum = 0, right sum = 0
// [1, 2, 3]	no	No such index exists
// [10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]	3	At a[3] -> left sum = 20, right sum = 20
// a[0] + a[1] + a[2] = a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]
//////////////////////////////////////////////////////////////
///1. create function
// - let leftSum = 0;
// - let rightSum = 0;
// - let element = 0;
// 2. create for loop to go through all elements from the left - 0,1,2,3 and so on
// -  in it sum the value of all the element
// 3. create for loop to go through all elements from the right - 3,2,1,0 and so on
// - in it sum the right elements
// 4.  if left sum === right sum console.log(i), else no
   function solve(arr) {
        for (let i = 0; i < arr.length; i++) {
            let leftSum = 0;
            let rightSum = 0;
            for (let j = i - 1; j >= 0; j--) {
                leftSum += arr[j];
            };
            for (let k = i + 1; k < arr.length; k++) {
                rightSum += arr[k];
            };
           
            if (leftSum === rightSum){
                console.log(i); 
                break
            };
            if (leftSum !== rightSum) {
                console.log('no');
                
            };
        };
    };
    

//    solve([1, 2, 3, 3]);
//    solve([1, 2]);
//    solve([1]);
//    solve([1, 2, 3]);
   solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

// гледаш числото 10, няма числа от ляво и сумата следователно е 0
// гледаш 5 от ляво е 10, събирам всички числа от дясно - 120 
// 120 е по-голямо от 10 - не ми върши работа
// продължавам
//гледам следващата 5-ца и от ляво са й 10,5, сумата е 15, от дясно почвам да събирам числата 99 виждам,
// че е първото и спирам, понеже е по-голямо от 15.
// стигам до 99 събирам всички числа от дясно те са 10,5,5 = 20, събирам всички числа от ляво
// те също са 20 - принтирам 3 - индекса на 99