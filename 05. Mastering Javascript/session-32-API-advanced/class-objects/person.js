class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //method (no need to use function keyword)
    introduce(){
        console.log(`Hi My name is ${this.name} and my age is ${this.age}`);
    }
}

let p1= new Person("Sonam","45");
//access properties
console.log(p1.name); // using . operator
p1.introduce()


// constructors are special functions which calls automatically when object created
// object - instance of a class
// which is used to initialize properties of class.