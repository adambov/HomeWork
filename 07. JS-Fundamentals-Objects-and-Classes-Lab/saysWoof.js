class Dog {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    saysWoof(){
        console.log(`Dog: ${this.name}, age:${this.age} says Woof!`);
    }
    
}
    let dog1 = new Dog('Sparky', 4);
    let dog2 = new Dog('Hera', 2);
    let dog3 = new Dog('Sansa', 1);


// console.log(dog1);
dog1.saysWoof();
// console.log(dog2);
dog2.saysWoof();
// console.log(dog3);
dog3.saysWoof();
