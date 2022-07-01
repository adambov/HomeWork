// Write a function that receives array of strings in the following format '{cat name} {age}'.
// Create a Cat class that receives in the constructor the name and the age parsed from the input. 
// It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.
// For each of the strings provided, you must create a cat object and invoke the .meow () method.

function parseCats(catsAsstring) {
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow!`);
        }

    }

    let cats = [];

    for(let catAsString of catsAsstring){
        let tokens = catAsString.split(' ');
        let cat = new Cat(tokens[0], Number(tokens[1]));
        cats.push(cat);
    }
    console.log(cats);
    // let cat = new Cat('Mellow', 2);
}
parseCats(['Mellow 2', 'Tom 5'])
parseCats(['Candy 1', 'Poppy 3', 'Nyx 2'])
// cat.meow();

// let cat = new Cat('Mellow 2', 'Tom 5');