// 2. Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property. Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12,
}
function objProp() {

    for (const key in student) {
            console.log(`${key}:${student[key]}`);
        }
        
    }

    for (const key in student) {
        console.log(`${key}:${student[key]}`);
        
    }
    delete student.rollno;
    

objProp();
