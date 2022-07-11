
// Create a Person Constructor with following fields:
// name: string
// age: numbers
// greet: function, which prints out 'Hi, I'm ${this.name} and I'm ${this.age} years old'
// Create a Developer Constructor with following fields:
// name: string
// age: numbers
// skillset: array of a developer skillsets
// Create a Manager Constructor with following fields:
// name: string
// age: numbers
// managed: array of developers being managed
// The Developer and Manager objects should reuse the Person Constructor and should inherit from Person the greet method!
/* --------------------------- Person constructor --------------------------- */
'use strict'
function Person(name, age){
    this.name = name;
    this.age = age;
  };
  Person.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  };
  /* --------------------------- Manager constructor -------------------------- */

  function Manager(name, age, managed){
    Person.call(this, name, age);
    this.managed = managed;
  };
  Manager.prototype = Object.create(Person.prototype);

  
  /* -------------------------- Developer constructor ------------------------- */
function Developer(name, age, skillset){
    Person.call(this, name, age);
    this.skillset = skillset;
  };
  Developer.prototype = Object.create(Person.prototype);

  Developer.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    console.log(`I know ${this.skillset}`);
  };

  Manager.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    console.log(`I manage ${this.managed}`);
  }

  let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
  let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

  let gates = new Manager('Bill Gates', 43, ['Maria Popova','Petar Petrov']);
  
  
  /* ----------------------------- Use the objects ---------------------------- */
  maria.greet();
  pesho.greet();
  gates.greet();