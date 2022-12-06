const cumputerChoice = Math.floor(Math.random() * 3);

const Rock = "ROCK";
const Paper = "PAPER";
const Scissors = "SCISOORS";

function getCumputerChoice() {
  if (cumputerChoice === 0) {
    return Rock;
  } else if (cumputerChoice === 1) {
    return Paper;
  } else {
    return Scissors;
  }
}

function playRound(playerSelection, cumputerSelection) {
  if (playerSelection === cumputerSelection) {
    return "draw"
  } else if (playerSelection === "ROCK" && cumputerSelection === "PAPER") {
    return "you lose ! paper beats rock";
  } else if (playerSelection === "ROCK" && cumputerSelection === "SCISOORS") {
    return "You win rock beat scissors";
  } else if (playerSelection === "PAPER" && cumputerSelection === "ROCK") {
    return "you win ! paper beats rock";
  } else if (playerSelection === "PAPER" && cumputerSelection === "SCISOORS") {
    return "you lose ! scisoors beats paper";
  } else if (playerSelection === "SCISOORS" && cumputerSelection === "PAPER") {
    return "you win ! scisoors beat paper";
  } else if (playerSelection === "SCISOORS" && cumputerSelection === "ROCK") {
    return "you lose ! rock beat scisoors"
  }
}
const getPlayerChoice = prompt("Rock, Paper, Scissors");
