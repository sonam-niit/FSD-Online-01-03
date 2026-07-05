class Animal{
    constructor(){
        console.log("Animal Class Constructor");
    }
    eat(){
        console.log("Animal Eating");
    }
}
class Dog extends Animal{
    constructor(){
        super(); // call parent class constructor
        console.log("Dog Class Constructor");
    }
}

dog = new Dog(); // object of dog class
// child class constructor call parent class constructor using super()
dog.eat() // accessing method if animal class