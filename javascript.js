let humanScore = 0;
let computerScore = 0;
//getComputerChoice
// generate random number and store in variable
// compare number to 3 seperate number ranges
//return rock, paper, or scissors

function getComputerChoice () {
    let gameResult;
    let randomNum = Math.random();
    if (randomNum <= .33) {
        gameResult = "rock";
        console.log(typeof gameResult);
        return gameResult;
    }
    else if (randomNum > .33 && randomNum <= .66) {
        gameResult = "paper";
        return gameResult;
    }
    else {
        gameResult = "scissors";
        return gameResult;
    }
}
console.log(getComputerChoice());
// getHumanChoice
// use prompt to collect human choice
// store prompt in variable

function getHumanChoice() {
    let humanChoice = prompt("Select rock, paper, or scissors.").toLowerCase();
    if (humanChoice === "rock") {
        humanChoice = "rock";
        console.log(humanChoice);
        return humanChoice;
    }
    else if (humanChoice === "paper") {
        humanChoice = "paper"; 
        console.log(humanChoice);
        return humanChoice;
    }
    else {
        humanChoice === "scissors";
        console.log(humanChoice);
        return humanChoice;
    }
    
}

// set choices to computer choice and human choice
// compare choice if 

function playRound (humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You Lose! Paper beats Rock!");
        ++computerScore;
        return computerScore;
    }
    else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("Its a tie!");
        return;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win!  Rock beats Scissors!");
        ++humanScore;
        return humanScore;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lose!  Scissors beats Paper!");
        ++computerScore;
        return;
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("Its a tie!");
        return;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You Win!  Paper beats Rock!");
        ++humanScore;
        return;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You Lose!  Rock beats Scissors!");
        ++computerScore;
        return;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You Win!  Paper beats Scissors!");
        ++humanScore;
        return;
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("It's a tie!");
        return;
    }
    else {
        console.log("Something went wrong");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);