const Deck = require("../models/Deck");

const createDeckController = async (req, res) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
};

const deleteDeckController = async (req, res) => {
  const deckId = req.params.deckId;
  const deletedDeck = await Deck.findByIdAndDelete(deckId);
  res.json(deletedDeck);
};

const getDecksController = async (req, res) => {
  const decks = await Deck.find();
  res.json(decks);
};

module.exports = {
  createDeckController,
  deleteDeckController,
  getDecksController,
};
