import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState([]);

  async function handleCreateDeck(e) {
    e.preventDefault();
    await fetch("http://localhost:5000/decks", {
      method: "POST",
      body: JSON.stringify({ title: title }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
    });
    setTitle("");
  }

  useEffect(() => {
    async function getDecks() {
      const response = await fetch("http://localhost:5000/decks");
      const data = await response.json();
      console.log(data);
      setDecks(data);
    }
    getDecks();
  }, []);

  return (
    <div className="App">
      <ul className="decks">
        {decks.map((deck) => (
          <li key={deck._id}>{deck.title}</li>
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
