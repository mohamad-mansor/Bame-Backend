import { Schema, model } from "mongoose";
import "../Userschema.js";

export const userSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 40,
    trim: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
  publisher: {
    type: String,
    required: true,
    trim: true,
  },
  developer: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    min: 0,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
    min: 0,
  },
  buyers: {
    type: [UserSchema],
    _id: false,
  },
});
