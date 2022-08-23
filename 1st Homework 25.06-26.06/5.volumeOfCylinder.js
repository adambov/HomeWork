// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places 
// using object classes. 
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.


class Numbers{
    constructor(diameter, height){
        this.diameter = diameter;
        this.height = height;
    }
    volume(){
        let radius = this.diameter / 2;
        let result = this.height * Math.PI * radius * radius;
        console.log(`The Cylider volume is: ${result.toFixed(4)}`)
    }
}   
let numbers = new Numbers(7, 4);
numbers.volume();



  


