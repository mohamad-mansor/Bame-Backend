import express from "express";
import {
  mongoConnect,
  mongoDCListener,
  mongoErrorListener,
} from "./db/connection.db.js";
import { config } from "dotenv";
import { UserRouter } from "./routes/userRoutes.js";
import { GameRouter } from "./routes/GameRoutes.js";

// dotenv
config();
const app = express();

// Datenbank
mongoDCListener();
mongoErrorListener();
await mongoConnect();

//App Middlewares

// Connection Fehlt
// Errorhandler einbinden
app.use("/game", GameRouter);
app.use("/user", UserRouter);

app.listen(3000, () => {
  console.log("Server is started on Port 3000");
});
