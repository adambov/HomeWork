// var obj = {
//     foo: function(){
//         // console.log(`this = ${this}`);
//         console.log(this);
//     }
// };

// obj.foo();
/////////////////////////////////////////////////
// function Constructor(id){
//     this.id = id;
//     console.log(`this = ${this}`);
// };

// var obj1 = new Constructor(1);

// // this = [object Object]
/////////////////////////////////////////////////
// function Constructor(id){
//     this.id = id;
//     console.log(`this in constructor: ${this}`);

//     this.showID = function(){
//         console.log(`ID: ${id}`);
//         console.log(`this in a method: ${this}`);
//     }
// };

// var obj1 = new Constructor(1);
// obj1.showID();
/////////////////////////////////////////////////////////
// const btn = document.querySelector("button");

// btn.addEventListener('click', function(event) {
//     console.dir(this);
// })
////////////////////////////////////////////////////////
// function Constructor(id) {
//     this.id = id;
//     this.saidHello = 0;
  
//     function __sayHello() {
//       this.saidHello++;
//       // here "this" is window object!!!
//     };
//     this.sayHello = function() {
//       __sayHello();
//       console.log(`I'm obj ${id}`);
//       console.log(`I said hello ${this.saidHello} times`);
//     };
//   }
  
//   var obj1 = new Constructor(1);
//   obj1.sayHello();
//   obj1.sayHello();
////////////////////////////////////////////////////////
// function update(name, age){
//     this.name = name;
//     this.age = age;
// }

// let maria = {name: "Maria", age:18};
// console.log("maria before", maria);

// update.apply(maria, ["Maria Ivanova", 23]);
// console.log("maria after", maria);
////////////////////////////////////////////////////
// function kitty(age, color) {
//     this.age = age;
//     this.color = color;
// };
// let cat1 = {age: 2 , color: 'yellow'};
// console.log(cat1);

// kitty.apply(cat1, [1.7, 'yellow and white'])
// console.log(cat1);
////////////////////////////////////////////////////////////////

// function update(name, age){
//     this.name = name;
//     this.age = age;
//  }
 
//  let maria = {name: "Maria", age:18};
//  console.log("maria before", maria);
 
//  update.call(maria, "Maria Ivanova", 23);
//  console.log("maria after", maria);
////////////////////////////////////
// function kitty(age, color) {
//     this.age = age;
//     this.color = color;
// };
// let cat1 = {age: 2 , color: 'yellow'};
// console.log(cat1);

// kitty.call(cat1, 1.7, 'yellow and white')
// console.log(cat1);
/////////////////////////////////////////////////
// const maria = {name: "Maria", age:18};
// function update(name, age){
//     this.name = name;
//     this.age = age;
// }

// console.log("maria before", maria);
// var updateMaria = update.bind(maria,"Maria Ivanova", 23);

// updateMaria();
// console.log("maria after", maria);
///////////////////////////////////////////////////////
