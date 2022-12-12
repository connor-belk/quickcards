const Deck = require("../models/Deck");

module.exports.createDeckController = async (req, res) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
};

module.exports.deleteDeckController = async (req, res) => {
  const deckId = req.params.deckId;
  const deletedDeck = await Deck.findByIdAndDelete(deckId);
  res.json(deletedDeck);
};

module.exports.getDecksController = async (req, res) => {
  const decks = await Deck.find();
  res.json(decks);
};
