class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    display(){
        console.log("Name: ",this.name);
        console.log("Salary: ",this.salary);
    }
}
class Developer extends Employee{
    constructor(name,salary,language){
        super(name,salary);
        this.language= language;
    }
    coding(){
        console.log(`${this.name} develops using ${this.language}`);
    }
}

const dev1= new Developer("Sonam",2345678,"JavaScript");
const dev2= new Developer("John",876544,"Core Java");

dev1.display();
dev1.coding();
dev2.display();
dev2.coding();