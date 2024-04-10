import { Artist, Song, User } from "./model.js";

const main = async () => {
  const singer = await Artist.create({
    name: "Artist",
    imageUrl: "https://encrypted-tbn0.gstatic.com/",
  });
  const songs = await Song.insertMany([
    {
      title: "DDU-DU DDU-DU",
      genre: "K-pop",
      album: "Square Up",
      year: 2018,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3kSFAqCZsbwqTYlKfArIs6MoqCA9_Q-E-w&s",
      singer: singer._id,
    },
    {
      title: "Kill This Love",
      genre: "K-pop",
      album: "Kill This Love",
      year: 2019,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlhC43YXygvPlxpAmU8xmy7RGGU6bJF1ETQ&s",
      singer: singer._id,
    },
    {
      title: "Lovesick Girls",
      genre: "K-pop",
      album: "The Album",
      year: 2020,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbytZ6OgA5KBU1otiostG1Ei8N7ql16L-TQ&s",
      singer: singer._id,
    },
  ]);
  const singeRiD = songs.map((song) => song._id);
  singer.songs = singeRiD;
  console.log(singer);
};

export default main;
