// class excerise - create a class wiht constructor and print name of the studnet and the grade of the student

class Student {
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }
   
}
let student = new Student('Ivan', 4.20);
let otherStudent = new Student('Ivanka', 5.70);
const thirdStudent = new Student('Nasko', 2.53);

console.log(student);
console.log(otherStudent);
console.log(thirdStudent);

