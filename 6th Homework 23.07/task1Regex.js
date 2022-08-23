// TEST CASE:
let testStr = `this is not meaningful.R2-D2 is a robot, first_second,1st of July`;

// YOUR CODE HERE
let regLiteral = /[a-zA-Z0-9]/g;
let validation = regLiteral.test(testStr);
console.log(validation);