// Write a program, which receives two string arrays containing number representations, 
// and prints on the console whether they are identical.
// Arrays are identical if their elements at same indexes are equal. 
// If they are identical, find the sum of the first array and print the following message: 
// `Arrays are identical. Sum: {sum}`
//  If the arrays are NOT identical, 
// find the first index where the arrays differ and print the following message:
//  `Arrays are not identical. Found difference at {index} index`

// тук проблема ми е, че не брейква, когато трябва, и не признава иф и елс и принтира всичко
// function sumEven(arrOfStr1, arrOfStr2) {
//     let arrSum = 0;
//     let arrOfNum1 = [];
//     let arrOfNum2 = [];

//     arrOfStr1.forEach(str1 => {
//         arrOfNum1.push(Number(str1));
//       });
//       arrOfStr2.forEach(str2 => {
//         arrOfNum2.push(Number(str2));
//       });
//       let areEqual = true;
//       for (let i = 0; i < arrOfNum1.length; i++) {
        
//         if (arrOfNum1[i] !== arrOfNum2[i]){
//             console.log(`Arrays are not identical. Found difference at ${i} index`);
//             areEqual=false;
//             break;
//         }else {
//              function arrayEquals(arrOfNum1, arrOfNum2) {
//                 return Array.isArray(arrOfNum1) &&
//                 Array.isArray(arrOfNum2) &&
//                 arrOfNum1.length === arrOfNum2.length &&
//                 arrOfNum1.every((val, index) => val === arrOfNum2[index]);
//         }
//         if (arrayEquals) {
//                 for (let num of arrOfNum1) {
//                     arrSum += num;
//                 };            
//         }
//         console.log(`Arrays are identical. Sum:${arrSum}`); 
//         break;
//       }
//       } 
          
// };

function sumEven(arrOfStr1, arrOfStr2) {
    let arrSum = 0;
    let arrOfNum1 = [];
    let arrOfNum2 = [];

    arrOfStr1.forEach(str1 => {
        arrOfNum1.push(Number(str1));
      });
      arrOfStr2.forEach(str2 => {
        arrOfNum2.push(Number(str2));
      });


let areEqual = true;
      for (let i = 0; i < arrOfNum1.length; i++) {
        if (arrOfNum1[i] !== arrOfNum2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual=false;
            break;
        }
        if (true) {
                for (let num of arrOfNum1) {
                    arrSum += num;
                };            
        }
        console.log(`Arrays are identical. Sum:${arrSum}`); 
        
      };
    };

// sumEven(['10','20','30'], ['10','20','30']);
sumEven(['1','2','3','4','5'], ['1','2','4','4','5']);
// sumEven(['1'], ['10']);