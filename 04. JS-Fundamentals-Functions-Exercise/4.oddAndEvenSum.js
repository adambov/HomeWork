// 4. Odd and Even Sum
// You will receive a single number. 
// You have to write a function, that returns the sum of all even and all odd digits from that number. 

function oddAndEvenSum(number) {
    //1 make an array of digits from the number
    // iterate through it
    //check which num is odd and which is even
    // sum the odds and the evens
    let stringNumber = String(number);
    let digitsArrNumber = stringNumber.split("").map(Number);
    // console.log(digitsArrNumber);
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < digitsArrNumber.length; i++) {
        if (digitsArrNumber[i] % 2 === 0) {
            evenSum += digitsArrNumber[i];  
        } else {
            oddSum += digitsArrNumber[i];
        };
    };
    console.log(`Odd sum = ${oddSum}`);
    console.log(`Even sum = ${evenSum}`);
    
};

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);