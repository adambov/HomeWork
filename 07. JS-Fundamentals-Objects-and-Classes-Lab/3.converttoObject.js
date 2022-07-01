// 3.	Convert to Object
// Write a function that receives a string in JSON format and converts it to an object.
// Loop through all the keys and print them with their values in format: "{key}: {value}"

function jsonToObj(objAsString) {
    let obj = JSON.parse(objAsString);
    // let obj = objAsString;
    // console.log(objAsString);
    // console.log(obj);
    // "{key}: {value}"
    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`)
    }
    
}
jsonToObj('{"name": "George", "age": 40, "town": "Sofia"}')
jsonToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}')