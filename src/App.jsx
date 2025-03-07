import { useState, useEffect } from "react";

export default function ShiritoriGame() {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState("");
  const [players, setPlayers] = useState(["Player 1", "Player 2"]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          handleTimeout();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentPlayer]);

  async function validateWord(word) {
    if (words.includes(word)) {
      setError("Word has already been used!");
      return false;
    }
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!response.ok) {
      setError("Invalid word!");
      return false;
    }
    return true;
  }

  async function handleSubmit() {
    if (!currentWord) return;
    const lastWord = words.length > 0 ? words[words.length - 1] : "";
    if (lastWord && currentWord[0] !== lastWord[lastWord.length - 1]) {
      setError("Word must start with the last letter of the previous word!");
      return;
    }

    const isValid = await validateWord(currentWord);
    if (!isValid) {
      const newScores = [...scores];
      newScores[currentPlayer] -= 1;
      setScores(newScores);
      return;
    }

    const newScores = [...scores];
    newScores[currentPlayer] += 1;
    setScores(newScores);

    setWords([...words, currentWord]);
    setCurrentWord("");
    setError("");
    setTimeLeft(15);
    setCurrentPlayer((currentPlayer + 1) % players.length);
  }

  function handleTimeout() {
    const newScores = [...scores];
    newScores[currentPlayer] -= 1;
    setScores(newScores);
    setTimeLeft(15);
    setCurrentPlayer((currentPlayer + 1) % players.length);
  }

  return (
    <div className="p-6 max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Shiritori Game</h1>
      <div className="flex gap-4 justify-center items-center mb-4">
        {players.map((player, index) => (
          <div key={index} className={`p-4 border rounded-lg shadow-md w-1/3 ${currentPlayer === index ? 'border-blue-500' : 'border-gray-300'}`}>
            <h2 className="text-lg font-semibold">{player}</h2>
            <p>Score: {scores[index]}</p>
            {currentPlayer === index && <p className="text-red-500 font-bold">Your Turn!</p>}
            <input
              type="text"
              className="w-full border rounded p-2 mt-2"
              value={currentPlayer === index ? currentWord : ""}
              onChange={(e) => currentPlayer === index && setCurrentWord(e.target.value.toLowerCase())}
              placeholder="Enter a word"
              disabled={currentPlayer !== index}
            />
            <button
              className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2 w-full ${currentPlayer !== index ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleSubmit}
              disabled={currentPlayer !== index}
            >
              Submit
            </button>
          </div>
        ))}
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <p className="mb-2 font-semibold">Time Left: {timeLeft}s</p>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="mt-4">
          <p className="font-semibold">Used Words:</p>
          <ul className="list-disc list-inside text-gray-700">
            {words.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
