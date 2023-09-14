// db.js
import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://mdwaseem:mdwaseem@cluster0.tdsn7wd.mongodb.net/note_app";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
