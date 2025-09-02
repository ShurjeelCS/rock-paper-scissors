
let humanScore = 0; 
let computerScore = 0;

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

// console.log(getComputerChoice());

function getHumanChoice() {
    let input = prompt(`ROCK PAPER SCISSORS?`);
    return input.toLowerCase();
}
// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice)
    console.log(computerChoice)
    switch (humanChoice) {
        case `rock`:
            if (computerChoice == `paper`) {
                console.log(`you lost paper beats rock`);
                computerScore++;
            } else if (computerChoice == `scissors`) {
                console.log(`you won rock beats scissors`);
                humanScore ++;
            } else if ((computerChoice == `rock`)) {
                console.log(`tied`);
            }
            break;
        case `scissors`:
            if (computerChoice == `scissors`) {
                console.log(`tied`);
            } else if (computerChoice == `paper`) {
                console.log(`you won scissors beats paper`);
                humanScore ++;
            } else if ((computerChoice == `rock`)) {
                console.log(`you lost, rock beats scissors`);
                computerScore++;
            }
            break;

        case `paper`:
            if (computerChoice == `scissors`) {
                console.log(`lost. scissors beats paper`);
                computerScore++;
            } else if (computerChoice == `paper`) {
                console.log(`tied`);
            } else if ((computerChoice == `rock`)) {
                console.log(`you won, paper beats rock`);
                humanScore++;
            }
            break;
        }
    }


function playGame(){
    
    for (let i = 0; i < 5; i++) {
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(human, computer);
    }

    if (computerScore == humanScore) {
        console.log(`tied`);

    } else if (computerScore > humanScore) {
        console.log(`computer win`);
    } else {
        console.log(`human wins`);    }
}   

playGame();