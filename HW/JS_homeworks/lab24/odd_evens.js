let numbers = [1,2,3,4,5];

function evens(numbers) {
    console.log(`The even numbers are:`);
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
            if(element % 2 === 0){
                // console.log(element)
                return element
        }
    } 
}
function odds(numbers) {
    console.log(`The odd numbers are:`);
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 !==0){
            return element
        }       
    }
}

