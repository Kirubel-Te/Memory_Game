# 🎮 Meme Memory Game

A fun and simple memory game built with React that challenges users to click on each meme image **only once**. If you repeat an image, your score resets. Reach 10 unique clicks to win — and get showered in confetti!

## 🧠 How It Works

- Memes are fetched from the [Imgflip Meme API](https://api.imgflip.com/get_memes).
- Clicking on a meme image will:
  - Increase your score **if it's unique**.
  - Reset your score **if it's already been clicked**.
- Images shuffle after every click.
- If you reach **10 unique images**, you win and see a confetti celebration!

---

## 🚀 Features

- 🖼️ Fetches real memes from an external API
- 🔄 Dynamic image shuffling
- ✅ Score and best score tracking
- 🎉 Confetti effect on win (using `react-confetti`)
- 🔁 Restart button to play again

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- CSS
- [Imgflip Meme API](https://api.imgflip.com/)
- [react-confetti](https://www.npmjs.com/package/react-confetti)
- [react-use](https://www.npmjs.com/package/react-use)

---

## 📦 Installation

1. Clone this repo:
   ```bash
   git clone https://github.com/Kirubel-Te/Memory_Game.git
   cd MemoryG
