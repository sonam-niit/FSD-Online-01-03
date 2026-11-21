import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/stuapp');
        // stuapp is Database Name
        console.log("DB Connected");
    } catch (error) {
        console.log("Error Occured",error)
    }
}

export default connectDB;