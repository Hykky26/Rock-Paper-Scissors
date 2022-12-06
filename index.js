const cumputerChoice = Math.floor(Math.random() * 4);

const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";

function getCumputerChoice() {
  if (cumputerChoice === 3) {
    return Rock;
  } else if (cumputerChoice === 2) {
    return Paper;
  } else {
    return Scissors;
  }
}

function playRound(playerSelection, cumputerSelection) {
  if (playerSelection === "Rock" && cumputerSelection === "Rock") {
    return "Draw"
  } else if (playerSelection === "Rock" && cumputerSelection === "Paper") {
    return "you lose ! paper beats rock"
  } else {
    return "You win rock beat scissors";
  }
}
const getPlayerChoice = prompt("Rock, Paper, Scissors");
