const student = {
    name: "John",
    age: 22,
    course: "MERN",
    address: "Newyork",
}

console.log(student);
console.log("Name:",student.name); //access using .
console.log("Age:",student.age);
console.log("Course:",student["course"]);
console.log("Address:",student["address"]); //access using []

// How to Modify
student.course = "FSD";
console.log("Course Updated:",student);
// Add new Property
student.phone = "1234567890";
console.log("Phone added",student);

delete student.phone; //delete phone property
console.log("After Delete",student);