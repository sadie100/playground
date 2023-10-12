const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "teal",
];

let score = 0;
let flippedCards = [];
let matchedPairs = 0;

const gameBoard = document.querySelector(".game-board");
const message = document.querySelector(".message");
const scoreDisplay = document.getElementById("score");
const finalScore = document.getElementById("final-score");
const resetButton = document.getElementById("reset-button");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the colors array
shuffleArray(colors);

// Create and shuffle an array to hold pairs of colors
const colorPairs = [...colors, ...colors];
shuffleArray(colorPairs);

colorPairs.forEach((cardColor) => {
  createCard(cardColor);
});

function createCard(cardColor) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundColor = "white"; // 처음에는 모두 하얀색으로 시작
  card.addEventListener("click", () => {
    if (!card.classList.contains("flipped") && flippedCards.length < 2) {
      flipCard(card, cardColor);
    }
  });
  gameBoard.appendChild(card);
}

function flipCard(card, cardColor) {
  card.style.backgroundColor = cardColor;
  card.classList.add("flipped");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}

function checkMatch() {
  if (
    flippedCards[0].style.backgroundColor ===
    flippedCards[1].style.backgroundColor
  ) {
    flippedCards.forEach((card) => {
      card.style.visibility = "hidden";
    });
    score += 10;
    scoreDisplay.textContent = score;
    matchedPairs++;

    if (matchedPairs === colors.length) {
      message.style.display = "block";
      finalScore.textContent = score;
    }
  } else {
    flippedCards.forEach((card) => {
      card.style.backgroundColor = "white";
      card.classList.remove("flipped");
    });
  }

  flippedCards = [];
}

resetButton.addEventListener("click", () => {
  // Reset the game
  gameBoard.innerHTML = "";
  score = 0;
  scoreDisplay.textContent = score;
  flippedCards = [];
  matchedPairs = 0;
  message.style.display = "none";

  // Shuffle the colors and recreate the board
  shuffleArray(colors);
  const newColorPairs = [...colors, ...colors];
  shuffleArray(newColorPairs);

  newColorPairs.forEach((cardColor) => {
    createCard(cardColor);
  });
});
