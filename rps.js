// gets random number (0, 1, or 2) and assigns the computer's move based on the number
switch (Math.floor(Math.random() * 3)) {
    case 0:
        computerSelection = "rock";
        break;
    case 1:
        computerSelection = "paper";
        break;
    case 2:
        computerSelection = "scissors";
        break;
}

// input the player's move
let playerSelection = "scissors";

// display game results
if (computerSelection == "rock" && playerSelection == "scissors") {
    console.log("Computer played rock. You lost. Rock beats scissors!");
} else if (computerSelection == "paper" && playerSelection == "rock") {
    console.log("Computer played paper. You lost. Paper beats rock!");
} else if (computerSelection == "scissors" && playerSelection == "paper") {
    console.log("Computer played scissors. You lost. Scissors beats paper!");
} else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You played rock. You won. Rock beats scissors!");
} else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You played paper. You won. Paper beats rock!");
} else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You played scissors. You won. Scissors beats paper!");
} else if (playerSelection == computerSelection) {
    console.log("You both played " + playerSelection + ". No one wins.");
} else {
    console.log("Something has gone wrong...")
}