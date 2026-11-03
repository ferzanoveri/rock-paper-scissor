let humanScore = 0;
let computerScore = 0;
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");

const body = document.querySelector("body");
const h1 = document.createElement("h1");

rockButton.addEventListener("click", (e) => {
  if (humanScore == 5) {
    h1.textContent = `Player Win! Player: ${humanScore} Computer: ${computerScore}`;
    body.appendChild(h1);
  } else if (computerScore == 5) {
    h1.textContent = `Computer Win! Player: ${humanScore} Computer: ${computerScore}`;
    body.appendChild(h1);
  } else {
    playGame(e.target.id);
  }
});
paperButton.addEventListener("click", (e) => {
  if (humanScore == 5) {
    h1.textContent = `Player Win! Player: ${humanScore} Computer: ${computerScore}`;
    body.appendChild(h1);
  } else if (computerScore == 5) {
    h1.textContent = `Computer Win! Player: ${humanScore} Computer: ${computerScore}`;
    body.appendChild(h1);
  } else {
    playGame(e.target.id);
  }
});
scissorButton.addEventListener("click", (e) => {
  if (humanScore == 5) {
    h1.textContent = `Player Win! Player: ${humanScore} Computer: ${computerScore}`;
    body.appendChild(h1);
  } else if (computerScore == 5) {
    h1.textContent = `Computer Win! Player: ${humanScore} Computer: ${computerScore}`;
    body.appendChild(h1);
  } else {
    playGame(e.target.id);
  }
});

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  if (random == 0) {
    return "rock";
  } else if (random == 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection == computerSelection) {
    console.log(`It's a tie`);
  } else if (
    (humanSelection == "paper" && computerSelection == "rock") ||
    (humanSelection == "rock" && computerSelection == "scissor") ||
    (humanSelection == "scissor" && computerSelection == "paper")
  ) {
    humanScore++;
    console.log(`You Win!`);
  } else {
    computerScore++;
    console.log(`You Lose!`);
  }
}

function playGame(humanSelection) {
  if (humanSelection == undefined) {
    alert("Select your hero first!");
  } else {
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human: ${humanSelection} and Computer: ${computerSelection}`);
  }
}

playGame();
