function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Choose one: rock, paper, or scissors: ");
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")){
            humanScore++;
            console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        } else if (humanChoice == computerChoice) {
            console.log("You tied!");
        } else {
            computerScore++;
            console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
        }
    }
    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log(`You won ${humanScore}-${computerScore}!`);
    } else if (humanScore < computerScore) {
        console.log(`You lost ${computerScore}-${humanScore}!`);
    } else {
        console.log(`You tied ${humanScore}-${computerScore}.`);
    }
}

playGame();