// Write a function that receives 3 parameters, sets them to an object, and returns that object.
// The input comes as 3 separate strings in the following order: firstName, lastName, age.

function personInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        
    };
    console.log(person.firstName, person.lastName, person.age);
    return person;
    
}


personInfo("Peter", "Pan","20");
personInfo("George", "Smith","18");