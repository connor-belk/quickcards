const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const DeckSchema = new Schema({
  title: String,
  cards: [
    {
      term: String,
      definition: String,
    },
  ],
});

const DeckModel = mongoose.model("Deck", DeckSchema);

module.exports = DeckModel;
