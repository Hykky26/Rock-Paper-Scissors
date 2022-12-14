const opt = ["rock", "paper", "scisoors"];

function getCumputerChoice() {
  const choice = opt[Math.floor(Math.random() * opt.length)];
  return choice;
}

function checkWinner(playerSelection, cumputerSelection) {
  if (playerSelection === cumputerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && cumputerSelection === "scisoors") ||
    (playerSelection === "scisoors" && cumputerSelection === "paper") ||
    (playerSelection === "paper" && cumputerSelection === "rock")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function playRound(playerSelection, cumputerSelection) {
  const result = checkWinner(playerSelection, cumputerSelection);
  if (result === "tie") {
    return "tie";
  } else if (result === "win") {
    return `you win ! ${playerSelection} beats ${cumputerSelection}`;
  } else {
    return `you lose ${cumputerSelection} beats ${playerSelection}`;
  }
}

function getPlayerChoice() {
  let validateInput = false;
  while (validateInput == false) {
    const choice = prompt("rock, paper, scisoor");
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (opt.includes(choiceInLower)) {
      validateInput = true;
      return choiceInLower;
    }
  }
}

function game() {
  let playerScore = 0;
  let cumputerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const cumputerSelection = getCumputerChoice();
    console.log(playRound(playerSelection, cumputerSelection));

    console.log("----------------");
    console.log(cumputerSelection);

    if (checkWinner(playerSelection, cumputerSelection) === "win") {
      playerScore++;
    } else if (checkWinner(playerSelection, cumputerSelection) === "lose") {
      cumputerScore++;
    }
  }
  console.log("Game Over");
  if (playerScore > cumputerScore) {
    console.log("Player is the winner");
  } else if (playerScore < cumputerScore) {
    console.log("Cumputer is the winner");
  } else {
    console.log("Score is a tie");
  }
}

game();
