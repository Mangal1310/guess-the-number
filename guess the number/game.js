let secretNumber = Math.floor(Math.random() * 100) + 1;
let lives = 10;

function checkGuess() {
  const userInput = document.getElementById("userInput").value;
  const message = document.getElementById("message");
  const livesDisplay = document.getElementById("lives");

  if (!userInput) return;

  const guess = parseInt(userInput);

  if (guess === secretNumber) {
    window.location.href = "win.html";
  } else {
    lives--;
    if (lives <= 0) {
      window.location.href = "lose.html";
    } else {
      message.textContent = guess > secretNumber 
        ? `Oops 😬! Your guess is too high. You have ${lives} lives remaining.` 
        : `Oops 😬! Your guess is too low. You have ${lives} lives remaining.`;
      livesDisplay.textContent = `Lives: ${lives}`;
    }
  }
}
