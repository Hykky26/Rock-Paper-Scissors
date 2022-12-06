/* creat a function getCumputeChoice ()that return randomly either 'Rock' 'Paper' or 'Scissors'
 */

/* creat a function with 2 param playerSelection && cumputerSelection that return a string that declare the winner as "You lose ! Paper Beats Rock";*/

// write a function game()
// call the playRound() inside of it to play 5 round && keeps score && report a winner or loser at the end

//génére un nombre aléatoire en 0 et 3
// const choice = Math.floor(Math.random() * 4)

const cumputerChoice = Math.floor(Math.random() * 4);
const playerChoice = prompt("Rock, Paper , Scissors ?");

function getCumputerChoice() {
  if (cumputerChoice === 3) {
    console.log("Rock");
  } else if (cumputerChoice === 2) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

function playRound(playerSelection, cumputerSelection) {
  return playerSelection && cumputerSelection;
}
