interface Student {
    id: number;
    name: string;
    email: string
}

type StudentUpdate = Partial<Student>;

const stu:StudentUpdate = {
    id: 101
}
console.log(stu);
const stu1:StudentUpdate = {
    name: "Bobby"
}

console.log(stu1);
