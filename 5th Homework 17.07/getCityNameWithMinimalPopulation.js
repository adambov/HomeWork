// TASK: getCityNameWithMinimalPopulation
// Implement findMinPopulationCityName function, so that it will return the
// name of the city with minimum population

const cities = [
	{name: 'Sofia', population: 1_236_000},
	{name: 'Plovdiv', population: 343_424 },
	{name: 'Burgas', population: 202_766},
	{name: 'Varna', population: 335_177},
];
/////////////////////1st forLoop solution//////////////////////
function solve(cities) {
	let minPop = cities[0].population;
	let minCityName = cities[0].name;
	for (let i = 0; i < cities.length; i++) {
		
		// let population1 = 
		if (cities[i].population < minPop) {
			minPop = cities[i].population;
			minCityName = cities[i].name;
		}
		
	}
	console.log(minCityName);

}
solve(cities);
		

// cities[0].name = 'no';
// console.log(cities)

function findMinPopulationCityName(cities) {
// YOUR CODE HERE
	
}


// TEST:
// const minCityName = findMinPopulationCityName(cities);
// console.log( minCityName );




// EXPECTED OUTPUT:
// 'Burgas'
