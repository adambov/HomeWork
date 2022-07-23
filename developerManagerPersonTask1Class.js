class Person {
    constructor(name, age, skillset){
        this.name = name;
        this.age = age;
        this.skillset = skillset;
    }

    devGreet(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
        console.log(`I know ${this.skillset}`);
    }

    managerGreet(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
        console.log(`I manage ${`${maria.name}, ${pesho.name}`}`);
    }
}

let maria = new Person('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Person('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

let gates = new Person('Bill Gates', 43, ['Maria Popova','Petar Petrov']);

maria.devGreet();
pesho.devGreet();
gates.managerGreet();
