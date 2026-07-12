class Employee{
    public name:string;
    public age: number;

    //constructor with default values
    constructor(name:string="Unknown",age:number=25){
        this.name=name;
        this.age=age;
    }

    display(){
        console.log("Name: ",this.name,", Age:",this.age);
    }
}

const e1= new Employee("Sonam",56);
e1.display()
const e2= new Employee();
e2.display()