# Shiritori Game

A simple two-player Shiritori game built with React and Tailwind CSS. Players take turns entering words where each new word must begin with the last letter of the previous word. The game enforces valid words, tracks scores, and includes a countdown timer.

## Features
- Two-player mode
- Word validation using an API
- Countdown timer (15 seconds per turn)
- Score tracking
- Turn-based gameplay

### How to Play

- Player 1 enters a word and submits it.
- Player 2 must enter a word starting with the last letter of Player 1's word.
- Words cannot be repeated.
- If a word is invalid, the player loses a point.
- If the timer runs out before a word is entered, the player loses a point.
- The game continues with alternating turns.

### Technologies Used

- React
- Tailwind CSS
- Dictionary API for word validation


## Setup & Installation

### Prerequisites
- Node.js (>= 14)
- npm or yarn



### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Eagl3Eyes/Shiritori-Game.git
   cd shiritori-game
2. Install dependencies:
    ```sh
    npm install
3. Start the development server:
    ```sh
    npm run dev


Open the app in your browser at http://localhost:5173/ (if using Vite).
