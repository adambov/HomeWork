// You’re tasked to create and print objects from a text table. 
// You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.
// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
// The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!

function solution(data) {
    let finalResult = {};
    for (const element of data) {
        let entries = element.split(' | ');
        // console.log(entries);
        let townName = entries[0];
        let latitude = entries[1];
        let longitude = entries[2];
        finalResult.name = townName;
        finalResult.latitude = latitude;
        finalResult.longitude = longitude;
        console.log(finalResult);
    }
}

solution(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']);

solution(['Plovdiv | 136.45 | 812.575']);