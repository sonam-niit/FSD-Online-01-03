import mongoose from "mongoose";

// mongoose.connect('mongodb://localhost:27017/')
// .then(()=>console.log("DB Connected"))
// .catch((err)=>console.log("Error Occured",err))

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