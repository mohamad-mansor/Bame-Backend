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

// Connection Fehlt
// Errorhandler einbinden
app.use("/game", GameRouter);
app.use("/user", UserRouter);

app.listen(3000, () => {
  console.log("Server is started on Port 3000");
});

// Endpoints
// user (get, post, update, delete)
// game (get, post, update, delete)

//MySQL Datenbank
/*  Spalte User 
      - username
      - email
      - id
      - password
      - csrf
      - role

    Spalte Games
      - title
      - release
      - Genre
      - price
      - publisher
      - developer

*/

//Datenbank Verbindung
// Herstellen der Verbindung

// Note
//mysql2 installieren
