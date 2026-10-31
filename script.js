let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let choice = prompt("Choose your hero");
  return choice.toLowerCase();
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

function playGame() {
  for (let index = 0; index < 5; index++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(
    `The final score is Human: ${humanScore} and Computer: ${computerScore}`,
  );
}

playGame();
