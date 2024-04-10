import mongoose from "mongoose";

export async function as() {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    console.log("db");
  } catch (error) {
    console.log(error);
  }
}
