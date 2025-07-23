import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://anuj:anuj123@cluster0.jw7u1.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}