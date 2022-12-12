import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import "./App.css";
import { deleteDeck } from "./api/decks/deleteDeck";
import { createDeck } from "./api/decks/createDeck";
import { getDecks } from "./api/decks/getDecks";

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState([]);

  async function handleCreateDeck(e) {
    e.preventDefault();
    const deck = await createDeck(title);
    setDecks([...decks, deck]);
    setTitle("");
  }

  async function handleDeckDelete(deckId) {
    await deleteDeck(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }

  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks();
      setDecks(newDecks);
    }
    fetchDecks();
  }, []);

  return (
    <div className="App">
      <ul className="decks">
        {decks.map((deck) => (
          <li key={deck._id}>
            <Link to={`decks/${deck._id}`}>{deck.title}</Link>
            <AiFillDelete
              className="delete-icon"
              onClick={() => handleDeckDelete(deck._id)}
            />
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateDeck} className="deck-form">
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <button>Create Deck</button>
      </form>
    </div>
  );
}

export default App;
