import { API_URL } from "../config.js";

export async function createDeck(title) {
  const response = await fetch(`${API_URL}/decks`, {
    method: "POST",
    body: JSON.stringify({ title: title }),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => {
    console.log(err);
  });
  return response.json();
}
