import mongoose, { Schema } from "mongoose";

const songSchema = new mongoose.Schema({
  title: String,
  singer: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" },
  album: String,
  genre: String,
  imageUrl: String,
  year: Number,
  liked: Boolean,
});

const artistSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
  liked: Boolean,
});

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  password: String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artist" }],
  favoriteSong: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
});

export const User = mongoose.model("User", userSchema);
export const Artist = mongoose.model("Artist", artistSchema);
export const Song = mongoose.model("Song", songSchema);
