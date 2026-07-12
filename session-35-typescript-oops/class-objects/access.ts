class Person{
    private salary: number;
    protected department:string="IT";

    constructor(salary:number){
        this.salary=salary;
    }
    showSalary(){
        console.log("Salary:",this.salary);
    }
}
class Manager extends Person{
    display(): void {
        console.log(this.department); 
        //protected properties acccessible by child class
    }
}
const emp= new Person(3456789);
// emp.salary (not accessible)
emp.showSalary()

const mana= new Manager(345678);
mana.display();