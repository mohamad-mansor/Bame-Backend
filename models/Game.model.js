import { Schema, model } from "mongoose";

const GameSchema = new Schema({
  name: { type: String, unique: true, required: true }, // Game name
  price: { type: Number, required: true }, // Price of the game
  author: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Developer (Author)
  publisher: { type: String, required: true }, // Publisher of the game
  releaseDate: { type: Date, required: true }, // Release date of the game
  age: { type: Number, required: true }, // Age restriction
});

export const GameModel = model("Game", GameSchema);
