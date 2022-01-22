let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];
let max = getHighestScoreIndex(scores)

// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---
if(scores[0] === max){
    console.log(console.log(`${students[0]} has the highest score: ${max}`))
} else if (scores[1] === max){
    console.log(`${students[1]} has the highest score: ${max}`)
} else{
    console.log(`${students[2]} has the highest score: ${max}`)
}


function getHighestScoreIndex(scores) {
    let maxGrade = scores[0]
    for (let i = 0; i <= scores.length; i++) {
        let grade = scores[i]
        grade += 1
        if(grade > maxGrade){
            maxGrade = grade
        };
        return maxGrade
    };
};
// expected output
// Maria has the higest score: 6


 
