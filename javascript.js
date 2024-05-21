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

// getHumanChoice
// use prompt to collect human choice
// store prompt in variable

function getHumanChoice() {
    let humanResult = prompt("Select rock, paper, or scissors.").toLowerCase();
    if (humanResult === "rock") {
        humanResult === "rock";
        return humanResult;
    }
    else if (humanResult === "paper") {
        humanResult === "paper"; 
        return humanResult;
    }
    else {
        humanResult === "scissors";
        return humanResult;
    }
    
}

// set choices to computer choice and human choice
// compare choice if 

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        ++computerScore;
        return computerScore;
    }
    else if (humanChoice === "rock" && computerChoice === "rock") {
        return;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {

        ++humanScore;
        return humanScore;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {

        ++computerScore;
        return;
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        return;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore;
        return;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        ++computerScore;
        return;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        return;
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return;
    }
    else {
        console.log("Something went wrong");
    }
}




function playGame() {
let i = 0;
    while (i < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }

    if (computerScore > humanScore) {
        console.log("You lose!")
    }
    else if (computerScore < humanScore) {
        console.log("You win!")
    }
    else if (computerScore == humanScore) {
        console.log("Its a tie!")
    }
    else {}

}

playGame();
console.log("Computer score is " + computerScore);
console.log("Human score is " + humanScore);