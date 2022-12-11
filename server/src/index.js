const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const Deck = require("./models/Deck.js");

const PORT = 5000;

app.use(express.json());

app.post("/decks", async (req, res) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  await newDeck.save();
  res.json(newDeck);
});

const db = mongoose
  .set("strictQuery", true)
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected...");
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log(err));
