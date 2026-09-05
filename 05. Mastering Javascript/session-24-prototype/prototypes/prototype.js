//constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
}
//prototype (shared function)
Student.prototype.introduce = function () {
    console.log(`Hi, I am ${this.name}, ${this.age} years old`); //mordern template literal
    console.log("Hi, I am " + this.name + " , " + this.age + " years old"); //old syntax
}

let s1 = new Student("Sarvjeet", 20);
let s2 = new Student("Deepak", 22);
let s3 = new Student("Priyesh", 21);

s1.introduce();
s2.introduce();
s3.introduce();

// every student has their own name and age behaviour (individual data)
// the introduce() behavior is same for all the students
// instead of storing the introduce() inside every object, we put it on the prototype so
// all the students can share same method and save memory

