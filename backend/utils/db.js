import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connect ho gaya");
  } catch (error) {
    console.error("MongoDB connect nahi hua:", error);
    process.exit(1);
  }
};

export default connectDB;
