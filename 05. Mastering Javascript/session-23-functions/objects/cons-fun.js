function Student(name,age){
    this.name=name;
    this.age=age;
    this.introduce=function(){
        console.log(`Hi, I am ${this.name}, ${this.age} years old`); //mordern template literal
        console.log("Hi, I am "+this.name+" , "+ this.age +" years old"); //old syntax
    }
}

let s1= new Student("Sarvjeet",20);
let s2= new Student("Deepak",22);
let s3= new Student("Priyesh",21);

s1.introduce();
s2.introduce();
s3.introduce();

