import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connect ho gaya");
    return true;
  } catch (error) {
    console.error("MongoDB connect nahi hua:", error);
    return false;
    process.exit(1);
  }
};

export default connectDB;
