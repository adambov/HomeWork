// 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// class : "Vi",
// rollno : 12 };
// Sample Output: name,sclass,rollno



//my 1st solution /////////////////////////
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
objProp();

    //Second solution// does not work - do not knwo why?
    // var student = {
    //     name : "David Rayy",
    //     sclass : "VI",
    //     rollno : '12',
    // }

    // let prop = Object.entries(student);
    //     console.log('Properties:', prop);

    //     let vals = Object.entries(student);
    //     console.log('Values:', vals);

    //     let entries = Object.entries(student);
        // console.log('Entries:', entries[1][2]);
    






  

 