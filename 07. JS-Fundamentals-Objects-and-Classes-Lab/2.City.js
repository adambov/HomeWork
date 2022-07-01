// Write a function that receives a single parameter – an object, containing five properties:
// { name, area, population, country, postcode }
// Loop through all the keys and print them with their values in format: "{key} -> {value}"
// See the examples below.

function cityInfo(city) {
    const props = Object.keys(city);
    
    for (let prop of props) {
        console.log(`${prop} -> ${city[prop]}`)
    }
}
    cityInfo ({
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"
    });
    cityInfo({
        name: "Plovdiv",
        area: 389,
        population: 1162358,
        country: "Bulgaria",
        postCode: "4000"
    });

