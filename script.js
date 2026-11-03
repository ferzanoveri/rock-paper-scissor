// let humanScore = 0;
// let computerScore = 0;

// function getComputerChoice() {
//   let random = Math.floor(Math.random() * 3);

//   if (random == 0) {
//     return "rock";
//   } else if (random == 1) {
//     return "paper";
//   } else {
//     return "scissor";
//   }
// }

// function getHumanChoice() {
//   let choice = prompt("Choose your hero");
//   return choice.toLowerCase();
// }

// function playRound(humanSelection, computerSelection) {
//   if (humanSelection == computerSelection) {
//     console.log(`It's a tie`);
//   } else if (
//     (humanSelection == "paper" && computerSelection == "rock") ||
//     (humanSelection == "rock" && computerSelection == "scissor") ||
//     (humanSelection == "scissor" && computerSelection == "paper")
//   ) {
//     humanScore++;
//     console.log(`You Win!`);
//   } else {
//     computerScore++;
//     console.log(`You Lose!`);
//   }
// }

// function playGame() {
//   for (let index = 0; index < 5; index++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
//   console.log(
//     `The final score is Human: ${humanScore} and Computer: ${computerScore}`,
//   );
// }

// playGame();

const body = document.querySelector("body");

const p = document.createElement("p");
p.textContent = `Hey I'm Red!`;
p.style.color = "red";
body.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I’m a blue h3!";
h3.style.color = "blue";
body.appendChild(h3);

const div = document.createElement("div");
div.style.backgroundColor = "pink";
body.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "I’m in a div";
div.appendChild(h1);

const anotherP = document.createElement("p");
anotherP.textContent = "ME TOO!";
div.appendChild(anotherP);

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "blue";
  console.log(e.target.style.backgroundColor);
});
