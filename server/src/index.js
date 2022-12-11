const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require("cors");

const Deck = require("./models/Deck.js");

const PORT = 5000;

app.use(cors("*"));
app.use(express.json({ extended: true }));

app.get("/decks", async (req, res) => {
  // TODO: get all decks for user to see in ui
  const decks = await Deck.find()
    .then((decks) => {
      res.json(decks);
    })
    .catch((err) => {
      console.log(err);
      res.send("ERROR!!", err.code, err.message);
    });
});

app.post("/decks", async (req, res) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

mongoose
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
