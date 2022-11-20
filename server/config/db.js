import mongoose from "mongoose";

const connectDB = async () => {
  const res = await mongoose.connect("mongodb://127.0.0.1:27017/mern-auth");
  if (res) {
    console.log("--- connected to db Sucessfully ---");
  } else {
    console.log("connection to db failed !!!");
  }
};

export default connectDB;
