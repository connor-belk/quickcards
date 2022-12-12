import { API_URL } from "../config.js";

export async function getDecks() {
  const response = await fetch(`${API_URL}/decks`).catch((err) => {
    console.log(err);
  });
  return response.json();
}
