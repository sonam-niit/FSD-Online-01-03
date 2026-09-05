const student = {
    name: "John",
    age: 22,
    course: "MERN",
    address: "Newyork",
    study(){
        console.log(this.name + " is studyding");
    },
    introduce(){
        console.log("My Name is "+this.name);
        console.log("I am "+this.age+" years old");
        console.log("My Course is "+this.course);
        console.log("I live in "+this.address);
    }
}

student.introduce();
student.study();
