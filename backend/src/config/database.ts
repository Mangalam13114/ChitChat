import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("mongoDB connected successfully");
  } catch (error) {
    console.error("mongoDB connection error:", error);
    process.exit(1); // exit with failure
    //  status code 1 means failure
    //  status code 0 means success
  }
};
