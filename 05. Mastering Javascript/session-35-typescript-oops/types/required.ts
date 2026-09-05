interface Student1 {
    id: number;
    name: string;  //optional
    email: string //optional
}

type RequiredStudent = Required<Student1>;

const student:RequiredStudent = {
    id: 101, name: "Sonam",email: "sonam@gmail.com"
}
console.log(student);
