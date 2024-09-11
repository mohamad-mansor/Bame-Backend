import express, { json } from "express";
import {
  mongoConnect,
  mongoDCListener,
  mongoErrorListener,
} from "./db/connection.db.js";
import { config } from "dotenv";
import { UserRouter } from "./routes/userRoutes.js";
import { GameRouter } from "./routes/GameRoutes.js";
import createHttpError from "http-errors";

// dotenv
config();
const app = express();

// Datenbank
mongoDCListener();
mongoErrorListener();
await mongoConnect();
app.use(json());
// Connection Fehlt
// Errorhandler einbinden
app.use("/game", GameRouter);
app.use("/user", UserRouter);

//404 Handler
app.all("*", (req, res, next) => {
  next(createHttpError.NotFound("This Page is not found"));
});

// Errorhandler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    code: err.status,
    answer: err.message || "Servererror Contact Support",
  });
});

app.listen(3000, () => {
  console.log("Server is started on Port 3000");
});
