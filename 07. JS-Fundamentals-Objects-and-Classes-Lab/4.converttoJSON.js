
// 4.	Convert to JSON
// Write a function that receives a first name, last name, hair color and sets them to an object.
// Convert the object to JSON string and print it.
// Input is provided as 3 single strings in the order stated above.

function objToString(firstName, lastName, hairColor) {
    let obj = {firstName, lastName, hairColor}

    console.log(JSON.stringify(obj));
}
objToString('George', 'Jones', 'Brown');
objToString('Peter', 'Smith', 'Blond');
