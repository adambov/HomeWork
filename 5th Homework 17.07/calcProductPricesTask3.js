// Given is next Array of Objects:
const products = [
	{
		code:1,
		name:"product1",
		category: "music",
		price:1
	},
	{
		code:2,
		name:"product2",
		category: "books",
		price:2
	},
	{
		code:3,
		name:"product3",
		category: "books",
		price:3
	},
	{
		code:4,
		name:"product4",
		category: "music",
		price:4
	}
]

/* -------------------------------------------------------------------------- */
/*                                   TASK1:                                   */
/* -------------------------------------------------------------------------- */
// Implement calcTotalPrice function, so that it will return the sum of all
// products price
function calcTotalPrice(products) {
// 	// YOUR CODE HERE
////////1st solution//////////////////
//     let result = 0;
//    for (let i = 0; i < products.length; i++) {
//         result += products[i].price;
//    }
//    return result;
	return products.reduce((acc, curr)=> acc + curr.price,0);
}
////////////////////////////2nd solution///////////////////////
// let totalPrice = products.reduce((acc, curr)=> {
// 	return acc + curr.price;
// }, 0);
// calcTotalPrice(products);
// TEST
let totalPrice = calcTotalPrice(products)
console.log(totalPrice);

// EXPECTED OUTPUT:
// 10


/* -------------------------------------------------------------------------- */
/*                                   TASK2:                                   */
/* -------------------------------------------------------------------------- */
// Implement calcTotalPriceByCategory function, so that it will return the
// price sum of all products matching the given catgory
////////////////////1st solution//////////////////////////////////
function calcTotalPriceByCategory(products, category) {
// 	// YOUR CODE HERE
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let k = 0; k < products.length; k++) {
//         if (products[k].category === 'music') {
//             sum1 += products[k].price
//         }else if (products[k].category === 'books') {
//             sum2 += products[k].price
//         };
//     }
//     if (category === 'music') {
//         console.log(sum1);
//     } else {
//         console.log(sum2);
//     };
}
////////////////////2nd solution///////////////////////
let totalPriceByCategory = products.filter((type => type.category=== 'music'))
totalPriceByCategory = totalPriceByCategory.reduce((acc,curr) => {
	return acc + curr.price;
}, 0);

// TEST
// let totalPriceByCategory = calcTotalPriceByCategory(products,'music')
console.log(totalPriceByCategory);

// EXPECTED OUTPUT:
// 5