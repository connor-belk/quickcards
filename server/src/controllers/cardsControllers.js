const Deck = require("../models/Deck");

const createCardForDeckController = async (req, res) => {
  const deckId = req.params.deckId;
  const deck = await Deck.findById(deckId);

  if (!deck) return res.status(400).json({ message: "Deck not found" });

  const { term, definition } = req.body;
  deck.cards.push({ term, definition });
  await deck.save();
  res.json(deck);
};

module.exports = {
  createCardForDeckController,
};
