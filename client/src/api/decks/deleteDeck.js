import { API_URL } from "../config.js";

export async function deleteDeck(deckId) {
  const response = await fetch(`${API_URL}/decks/${deckId}`, {
    method: "DELETE",
  }).catch((err) => {
    console.log(err);
  });
  return response.json();
}
