import mongoose from "mongoose";
import bcrypt from "bcrypt";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        min: 18
    },
    course: {
        type: String,
        default: "Node JS"
    },
    password: {
        type: String,
        required: true
    }
});

// Pre hook
studentSchema.pre("save",async function(){
    console.log("Before Save");
    this.name = this.name.toUpperCase();
    this.password = await bcrypt.hash(this.password,10);
})

// Post hook
studentSchema.post("save",function(doc){
    console.log("student saved successfully");
    console.log("student data",doc);
})

const Student = mongoose.model("Student",studentSchema);
export default Student;