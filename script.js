
let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");
container.setAttribute("style", "border: 4px solid red;");
const displayHuman = document.createElement("p");
const displayComputer = document.createElement("p");
const text = document.createElement("p");
const displayHumanScore = document.createElement("p");
const displayComputerScore = document.createElement("p");
displayHumanScore.textContent = `Human score: 0`;
displayComputerScore.textContent = `Computer score: 0`;

function getComputerChoice() {
    let random = Math.random();
    if (random >= 0.33 && random <= 0.66) {
        return "rock";
    } else if (random < 0.330) {
        return `scissors`;

    } else if (random > 0.66) {

        return "paper"
    }
}



function getHumanChoice() {
    let input = prompt(`ROCK PAPER SCISSORS?`);
    return input.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    displayHuman.textContent =`you picked ${humanChoice} `;
    displayComputer.textContent = `computer picked ${computerChoice} `; 
    switch (humanChoice) {
        case `rock`:
            if (computerChoice == `paper`) {
                text.textContent = "you lost. paper beats rock";
                computerScore++;
                displayComputerScore.textContent = `computer score: ${computerScore}`;
            } else if (computerChoice == `scissors`) {
                text.textContent =(`you won rock beats scissors`);
                humanScore++;
                playGame()
                displayHumanScore.textContent=`human score: ${humanScore}`;
            } else if ((computerChoice == `rock`)) {
                text.textContent = (`tied`);
            }
            break;
        case `scissors`:
            if (computerChoice == `scissors`) {
                text.textContent = (`tied`);
            } else if (computerChoice == `paper`) {
                text.textContent =(`you won scissors beats paper`);
                humanScore++;
                playGame()
                displayHumanScore.textContent=`human score: ${humanScore}`;
            } else if ((computerChoice == `rock`)) {
                text.textContent =(`you lost, rock beats scissors`);
                computerScore++;
                displayComputerScore.textContent = `computer score: ${computerScore}`;
            }
            break;

        case `paper`:
            if (computerChoice == `scissors`) {
                text.textContent = (`lost. scissors beats paper`);
                computerScore++;
                displayComputerScore.textContent = `computer score: ${computerScore}`;
            } else if (computerChoice == `paper`) {
                text.textContent = (`tied`);
            } else if ((computerChoice == `rock`)) {
                text.textContent = (`you won, paper beats rock`);
                humanScore++;
                playGame()
                displayHumanScore.textContent=`human score: ${humanScore}`;
            }
            break;
    }

    container.appendChild(displayHuman);
    container.appendChild(displayComputer);
    container.appendChild(text);
    container.appendChild(displayHumanScore);
    container.appendChild(displayComputerScore);
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
let counter = 0;

    rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));



function playGame() {
    const winner = document.createElement("h1");
    if (humanScore == 5) {
        winner.textContent = "Congrats, you won!";
        container.appendChild(winner);
    }
    if (computerScore == 5) {
        winner.textContent = "Unlucky, the computer wins!";
                container.appendChild(winner);

    }
}

