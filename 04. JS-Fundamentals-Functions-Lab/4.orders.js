// 4. Orders
// Write a function that calculates the total price of an order and prints it on the console. The function should receive one of the following products: coffee, coke, water, snacks; and a quantity of the product. The prices for a single piece of each product are: 
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
// Print the result formatted to the second decimal place.
// Hints
// •	Create a function and pass the two variables in.
// •	Print the result in the function.
function priceCalc(product, count) {
    // let coffee = 1.50;
    // let water = 1.00;
    // let coke = 1.40;
    // let snacks = 2.00;
    let price = 0;
    if (product === 'coffee' ) {
        price = 1.50;
    } else if (product === 'water') {
        price = 1.00;
    } else if (product === 'coke') {
        price = 1.40;
    } else if (product === 'snacks') {
        price = 2.00;
    };
    let orderPrice = (price * count).toFixed(2);

    return orderPrice;
};

console.log(priceCalc("water", 5));
console.log(priceCalc("coffee", 2));