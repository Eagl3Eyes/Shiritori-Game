# ⚡ Shiritori-Game

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/64a2737c-f609-4975-a804-7f499a421a27/deploy-status)](https://app.netlify.com/sites/shiritori-game/deploys)
[![GitHub stars](https://img.shields.io/github/stars/Eagl3Eyes/Shiritori-Game?style=for-the-badge)](https://github.com/Eagl3Eyes/Shiritori-Game/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Eagl3Eyes/Shiritori-Game?style=for-the-badge)](https://github.com/Eagl3Eyes/Shiritori-Game/network)
[![GitHub issues](https://img.shields.io/github/issues/Eagl3Eyes/Shiritori-Game?style=for-the-badge)](https://github.com/Eagl3Eyes/Shiritori-Game/issues)
[![GitHub license](https://img.shields.io/github/license/Eagl3Eyes/Shiritori-Game?style=for-the-badge)](LICENSE)

**A simple, fun Shiritori game built with React and Vite.**

[Live Demo](https://shiritori-game.netlify.app/)

</div>

## 📖 Overview

Shiritori-Game is a single-page web application that allows users to play the classic Japanese word game Shiritori.  The game involves players taking turns saying words, each starting with the last letter of the previous word.  This implementation provides a clean and user-friendly interface for playing the game.  The target audience is anyone who enjoys word games or wants to learn about Shiritori.

## ✨ Features

-   **Turn-based gameplay:** Players take turns entering words.
-   **Word validation:** The game checks if the entered word is valid (starts with the correct letter, is not a duplicate, and is a valid word).
-   **Win condition:** The game ends when a player cannot find a valid word.
-   **User-friendly interface:** Simple and intuitive design for ease of play.
-   **Responsive design:** Adapts to various screen sizes.


## 🖥️ Screenshots

<img width="630" height="402" alt="image" src="https://github.com/user-attachments/assets/69f65280-4599-433f-a036-2192c698cbb8" />


## 🛠️ Tech Stack

**Frontend:**

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)

## 🚀 Quick Start

### Prerequisites

-   Node.js (version 16 or higher)
-   npm (or yarn)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Eagl3Eyes/Shiritori-Game.git
    cd Shiritori-Game
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Visit `http://localhost:5173`


## 📁 Project Structure

```
Shiritori-Game/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── components/
│   │   └── Game.jsx
│   ├── main.jsx
│   └── styles/
│       └── App.css
├── package.json
├── package-lock.json
├── vite.config.js
└── eslint.config.js
```

## ⚙️ Configuration

No specific configuration files beyond `package.json` and `vite.config.js` are present.

## 🔧 Development

### Available Scripts

| Command     | Description             |
|-------------|--------------------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Starts a preview server for the production build |


## 🧪 Testing

No formal testing framework is currently implemented.

## 🚀 Deployment

The application is deployed to Netlify using the built-in Netlify integration.  A production build can be created using `npm run build` then deployed manually to Netlify or a similar platform.


## 🤝 Contributing

TODO: Add contributing guidelines

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Eagl3Eyes
</div>
