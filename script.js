function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Choose one: rock, paper, or scissors: ");
    return choice.toLowerCase();
}

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice == "rock" && computerChoice == "scissors") {
//         humanScore++;
//         console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
//     } else if (humanChoice == "scissors" && computerChoice == "paper") {
//         humanScore++;
//         console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
//     } else if (humanChoice == "paper" && computerChoice == "rock"){
//         humanScore++;
//         console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
//     } else if (computerChoice == "rock" && humanChoice == "scissors") {
//         computerScore++;
//         console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
//     } else if (computerChoice == "scissors" && humanChoice == "paper") {
//         computerScore++;
//         console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
//     } else if (computerChoice == "paper" && humanChoice == "rock"){
//         computerScore++;
//         console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
//     } else if (humanChoice == computerChoice) {
//         console.log("You tied!")
//     }
// }

// function playRound(humanChoice, computerChoice) {
//     if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")){
//         humanScore++;
//         console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
//     } else if (humanChoice == computerChoice) {
//         console.log("You tied!");
//     } else {
//         computerScore++;
//         console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
//     }
// }

// const humanSelection = getHumanChoice();
// console.log(humanSelection)
// const computerSelection = getComputerChoice();
// console.log(computerSelection)

// playRound(humanSelection, computerSelection);
// console.log(humanScore);
// console.log(computerScore);

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