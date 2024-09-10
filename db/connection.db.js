import mongoose from "mongoose";

export async function mongoConnect() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING, {
      dbName: "games_db",
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export function mongoErrorListener() {
    mongoose.connection.on("error", (err) => {
      console.log(err);
    });
  }
  
export function mongoDCListener() {
    mongoose.connection.on("disconnected", (err) => {
      console.log(err);
    });
}
