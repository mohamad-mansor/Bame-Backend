import { config } from "dotenv";
import mongoose from "mongoose";
config();

export async function mongoConnect() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING, {
      dbName: "VideoGame-backend",
    });
    console.log("Connection zu MongoDB erfolgreich");
  } catch (error) {
    console.log(error);
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
