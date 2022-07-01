// 1.	Employees
// You're tasked to create a list of employees and their personal numbers.
// You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
// Try to use an object.
// At the end print all the list employees in the following format:
//  "Name: {employeeName} -- Personal Number: {personalNum}" 
/////////1st solution/////////////////////////////
// function solution(employees) {
//     listOfEmployees = {}
//     for (let employee of employees) {
//         listOfEmployees.name = employee;
//         let employeeNumber = employee.length;
//         console.log(`Name: ${employee} -- Personal Number: ${employeeNumber}`);
//     }
// }
function solution(input) {
    listOfEmployees = [];
    class Employees{
        constructor(name, length){
            this.name = name;
            this.length = length;
        }      
    }
    for (let employee of input) {
        let currentEmployee = new Employees(employee, employee.length);
        // console.log(currentEmployee);
            listOfEmployees.push(currentEmployee);
    }
    listOfEmployees.forEach(currentEmployee => {
        console.log(`Name: ${currentEmployee.name} -- Personal Number: ${currentEmployee.length }`);
    });
    // console.log(listOfEmployees);
}

solution([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
    