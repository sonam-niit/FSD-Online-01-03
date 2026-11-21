import connectDB from "./connect.js";
import Student from "./models/Student.js";


const readData = async()=>{
    await connectDB(); // DB Connection

    let students = await Student.find({ age: { $gt:20}},{name:1,_id:0});
    console.log("All Students", students);

    students = await Student.find({ course: "Node JS"},{name:1,_id:0});
    console.log("All Students", students);

    students = await Student.find({},{name:1,age:1,_id:0}).sort({age:1});
    console.log("Sorted Students", students);
}
readData();