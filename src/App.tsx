import { useState } from "react";
import words from "./assets/wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        margin: "0 auto",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center", color: "blue" }}>
        Lose Win
      </div>
      <div>
        {/* <HangmanDrawing/>
        <HangmanWord/>
        <Keyboard/> */}
      </div>
    </div>
  );
}

export default App;
