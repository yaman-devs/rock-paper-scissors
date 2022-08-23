const choose = Array("rock", "paper", "scissors");
const buttons = document.querySelectorAll("button");
const pPlays = document.querySelector("#plays");
const pWins = document.querySelector("#wins");
const pWinner = document.querySelector("#winner");
let winner;
let wins = 0;
let cWins = 0;
let plays = 0;

buttons.forEach((button) => button.addEventListener("click", playerSelection));

function computerPlay() {
  let computerChoice = choose[Math.floor(Math.random() * choose.length)];
  return computerChoice;
}
function playerSelection(e) {
  let playerSelection = this.dataset.selection;
  game(playerSelection);
}
function playRound(playerSelection, computerSelection) {
  switch (computerSelection) {
    case "rock":
      switch (playerSelection) {
        case "rock":
          console.log("Draw!");
          winner = "none";
          wins += 0;
          return winner, wins;
          break;
        case "paper":
          console.log("You Win! Paper beats Rock");
          winner = "Player";
          wins += 1;
          cWins -= 1;
          return winner, wins;
          break;
        case "scissors":
          console.log("You Lose! Rock beats Scissors");
          winner = "Computer";
          wins -= 1;
          cWins += 1;
          return winner, wins;
          break;
      }
      break;
    case "paper":
      switch (playerSelection) {
        case "paper":
          console.log("Draw!");
          winner = "none";
          wins += 0;
          return winner, wins;
          break;
        case "scissors":
          console.log("You Win! Scissors beats Paper");
          winner = "Player";
          wins += 1;
          cWins -= 1;
          return winner, wins;
          break;
        case "rock":
          console.log("You Lose! Paper beats Rock");
          winner = "Computer";
          wins -= 1;
          cWins += 1;
          return winner, wins;
          break;
      }
      break;
    case "scissors":
      switch (playerSelection) {
        case "scissors":
          console.log("Draw!");
          winner = "none";
          wins += 0;
          return winner, wins;
          break;
        case "rock":
          console.log("You Win! Rock beats Scissors");
          winner = "Player";
          wins += 1;
          cWins -= 1;
          return winner, wins;
          break;
        case "paper":
          console.log("You Lose! Scissors beats Paper");
          winner = "Computer";
          wins -= 1;
          cWins += 1;
          return winner, wins;
          break;
      }
      break;
  }
}

function game(playerSelection) {
  const computerSelection = computerPlay();
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  console.log(winner);
  console.log(wins);
  plays++;
  pWins.textContent = wins;
  pWinner.textContent = winner;
  pPlays.textContent = plays;

  if (wins == 5) {
    alert("You Win!");
    wins = 0;
    cWins = 0;
  } else if (cWins == 5) {
    alert("You Lose!");
    wins = 0;
    cWins = 0;
  }
}
