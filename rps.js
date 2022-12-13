// function generates a random number 0-2 and returns a move based on that number
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

const options = ["rock", "paper", "scissors"];

  // defines the player's moves
let playerSelectionRaw = getPlayerChoice();

// prompt for player move until received

function getPlayerChoice() {
    let playerMove = prompt("What's your move?");
    while (playerMove == "" 
    || options.includes(playerMove.toLowerCase()) == false) {
        playerMove = prompt("What's your move?")
    }
    return playerMove.toLowerCase();
}

// function to play one game and return the winner along with the moves played
function playRound(computerSelection, playerSelection) {
    let playerSelectionUpper = (playerSelection.substr(0, 1).toUpperCase() + playerSelection.substr(1));
    let computerSelectionUpper = (computerSelection.substr(0, 1).toUpperCase() + computerSelection.substr(1));
    if (playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "paper" && computerSelection == "rock" 
    || playerSelection == "scissors" && computerSelection == "paper") {
        return `Player won. ${playerSelectionUpper} beats ${computerSelection}.`;
    } else if (playerSelection == computerSelection) {
        return `Tie. Player and computer both played ${playerSelection}.`;
    } else {
        return `Computer won. ${computerSelectionUpper} beats ${playerSelection}.`;
    }
}

// play five games, print results, then show score and declare the overall winner of the games 
function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let rounds = 0; rounds < 5; rounds++) {
        let roundResult = playRound(getComputerChoice(), getPlayerChoice());
        console.log(roundResult)
        if (roundResult.includes("Player won.")) {
            playerCount++
        } else if (roundResult.includes("Computer won.")) {
            computerCount++
        } 
    }
    if (playerCount == computerCount) {
        console.log("Player score: " + playerCount + "\nComputer score: " + computerCount + "\nThe game was a tie.");
    } else if (playerCount > computerCount) {
        console.log("Player score: " + playerCount + "\nComputer score: " + computerCount + "\nThe winner is the player.");
    } else {
        console.log("Player score: " + playerCount + "\nComputer score: " + computerCount + "\nThe winner is the computer.");
    }
}

game();