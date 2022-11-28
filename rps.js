// gets random number (0, 1, or 2) and assigns the computer's move based on the number
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    switch (number) {
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
return computerSelection;
}

getComputerChoice();


// input the player's move
let initialPlayerSelection = "scissors";
let playerSelection = initialPlayerSelection.toLowerCase();

// display game results
function playRound(x, y) {
    let result = " "

if (x == "rock" && y == "scissors") {
    result = "You lost. Computer played rock. Rock beats scissors!";
} else if (x == "paper" && y == "rock") {
    result = "You lost. Computer played paper. Paper beats rock!";
} else if (x == "scissors" && y == "paper") {
    result = "You lost. Computer played scissors. Scissors beats paper!";
} else if (y == "rock" && x == "scissors") {
    result = "You won. You played rock. Rock beats scissors!";
} else if (y == "paper" && x == "rock") {
    result = "You won. You played paper. Paper beats rock!";
} else if (y == "scissors" && x == "paper") {
    result = "You won. You played scissors. Scissors beats paper!";
} else if (y == x) {
    result = "You both played " + y + ". No one wins.";
} else {
     result = "Something has gone wrong...";
}
return result;
}


// function to play five games and keep tally
function fiveRounds() {    
    for (let times = 0; times < 5; times++) {
        console.log(playRound(getComputerChoice(), playerSelection));
        }
    }

fiveRounds();