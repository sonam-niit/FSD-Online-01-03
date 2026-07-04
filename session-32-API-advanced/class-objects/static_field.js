class Person{
    static course = "FSD"; // general for all
    constructor(name){
        this.name=name;
    }
}

const p1= new Person("John");
const p2= new Person("Alex");

console.log(p1.name);
console.log(p2.name);
// how to access course
console.log(Person.course); // direct access using class name no need any object

