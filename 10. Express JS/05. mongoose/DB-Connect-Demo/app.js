import connectDB from "./connect.js";
import Student from "./models/Student.js";

const createData = async()=>{
    await connectDB(); // DB Connection

    const student = await Student.create({
        name: "shravani",
        email: "shravani@gmail.com",
        age: 22,
        course: "MERN Stack",
        password: "shravani@123"
    })
    console.log(" Student Created");
}
createData();

const readData = async()=>{
    await connectDB(); // DB Connection

    const students = await Student.find();
    console.log("All Students", students);
}
//readData();

const updateData = async(id)=>{
    await connectDB(); // DB Connection

    const student = await Student.findByIdAndUpdate(id,{
        age: 35,
        course: "MERN Stack"
    })
    console.log("Student Updated");
}
//updateData("pass id that you want to delete"); // copy ID from DB

const deleteData = async(id)=>{
    await connectDB(); // DB Connection

    const student = await Student.findByIdAndDelete(id);
    console.log("Student Deleted");
}
// deleteData("pass id that you want to delete"); // copy ID from DB