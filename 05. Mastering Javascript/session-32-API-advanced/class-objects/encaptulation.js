class Person{
    #name;
    #age;
    constructor(name,age){
        this.#name=name;
        this.#age=age;
    }
    get age(){
        return this.#age
    }
    set age(value){
        this.#age=value
    }
    get name(){
        return this.#name
    }
    set name(value){
        this.#name=value
    }
}

let p1= new Person("Sonam","45");
console.log(p1.age); //getter method
p1.name = "Sonam Soni" //setter method
console.log(p1.name); //getter method



// # is used to create property private (Mordern Javascript)
// _ is used earlier create property private
// means this property is not accessible outside the class
// how to access them?
// use getters and setters method