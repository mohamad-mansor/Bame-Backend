import express from "express";
const app = express();

// Endpoints
// /user (get, post, update, delete) - Mohamad
// /game (get, post, update, delete) - Ayhem

//MySQL Datenbank
/*  Spalte User 
      - username
      - email
      - id
      - password
      - csrf
      - role

    Spalte Games x
      - title x
      - Genre x 
      - price x
      - age x
      - publisher x 
      - developer x
      - buyers x

*/

// Model Anlegen
// User-Model - Edgard
// Games-Model - Markus

//Datenbank Verbindung
// Herstellen der Verbindung - // Patrick

// Note
//mysql2 installieren

app.listen(3000, () => {
  console.log("Server is started on Port 3000");
});
