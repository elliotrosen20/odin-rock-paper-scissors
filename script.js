const buttons = document.querySelectorAll("button");
const round = document.querySelector(".round");
const human_score = document.querySelector(".human_score");
const computer_score = document.querySelector(".computer_score");


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")){
        humanScore++;
        round.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;   
    } else if (humanChoice == computerChoice) {
        round.textContent = "You tied!";
    } else {
        computerScore++;
        round.textContent = `You lose, ${computerChoice} beats ${humanChoice}.`;
    }
    human_score.textContent = `You: ${humanScore}`
    computer_score.textContent = `Computer: ${computerScore}`
}

function gameResult() {
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            round.textContent += ` Game over: You won ${humanScore}-${computerScore}!`;
        } else if (humanScore < computerScore) {
            round.textContent += ` Game over: You lost ${computerScore}-${humanScore}!`;
        } else {
            round.textContent += `Game over: You tied ${humanScore}-${computerScore}.`;
        }
        humanScore = 0;
        computerScore = 0;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let computerSelection = getComputerChoice();
        let playerSelection = button.className;
        playRound(playerSelection, computerSelection);
        gameResult();
    })
})

