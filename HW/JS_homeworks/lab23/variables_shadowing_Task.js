// TASK: преди да пуснете програмата си запишете какъв очаквате да е изхода от програмата и след това сравнете.

var x = 1;

var foo = function() {
	var x = 2;

	let bar = function(x) {
		console.log("x in bar = ", x)
	};
	bar(99); //99

	console.log("x in foo = ", x); //2
}

foo(); //101
console.log("x in main = ", x);//1