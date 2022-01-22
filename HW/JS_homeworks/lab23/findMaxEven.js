// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);

function findMaxEven(numbers) {
    for (let i = 0; i <= numbers.length; i++) {
        let currentNumber = numbers[i];
        if (currentNumber >= i && currentNumber % 2 == 0){
            maxNumber = currentNumber
        }
        return maxNumber
    }
    
}

console.log(`The max of ${numbers} is ${max}`);
