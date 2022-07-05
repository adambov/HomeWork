// 2.	Day of Week
// Write a program, which receives a number and prints the corresponding name of the day
//  of the week (in English).  
// If the number is NOT a valid day, print: "Invalid day!".

function solve(day) {
   let daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
   if(day >= 1 && day <= 7){
        let index = day - 1;
        console.log(daysInWeek[index]);
   } else{
        console.log("Invalid day!")
   }
};

solve(3);
solve(6);
solve(11);
solve(-54);
