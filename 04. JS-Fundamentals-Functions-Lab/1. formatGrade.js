// 1. Format Grade
// Write a function that receives a grade between 2.00 and 6.00 
//and prints a formatted line with grade and description.
// •	< 3.00 - "Fail"
// •	>= 3.00 and < 3.50 - "Poor"
// •	>= 3.50 and < 4.50 - "Good"
// •	>= 4.50 and < 5.50 - "Very good"
// •	>= 5.50 - "Excellent"

function solve(grade) {
    let formatted = grade.toFixed(2);
    if (grade < 3.00) {
        console.log(`Fail (${formatted})`);
    } else if (grade >= 3.00 && grade <= 3.50){
        console.log(`Poor (${formatted})`);
    } else if (grade > 3.50 && grade <= 4.50) {
        console.log(`Good (${formatted})`);
    }else if (grade > 4.50 && grade <= 5.50) {
        console.log(`Very good (${formatted})`);
    } else if (grade > 5.50 && grade <= 6.00){
        console.log(`Excellent (${formatted})`);
    } else{
        console.log(`Invalid grade!`);
    };
    
};

solve(3.33);
solve(4.50);
solve(2);
solve(6.10);

