let humanScore = 0;
let computerScore = 0;
let ties = 0;

let computerChoice;
let humanChoice;

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"]; // Choices for computer to play
    // let getComputerChoice = (Math.random(Math.floor) * choice.length);
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        robotChoice = "rock";
    } else if (randomNumber === 2) {
        robotChoice = "paper";
    } else {
        robotChoice = "scissors";
    }

    // console.log(computerChoice);
    // console.log(randomNumber + " was your number");
    // // return choice[randomIndex];
    // console.log(choice);

    return robotChoice;
}

function getHumanChoice() {
    let userInput = prompt("Enter your choice (rock, paper, or scissors):");
    userInput = userInput.toLowerCase();
    if (userInput === "rock") {
        dumbVariable = userInput;
    } else if (userInput === "paper") {
        dumbVariable = userInput;
    } else if (userInput === "scissors") {
        dumbVariable = userInput;
    } else {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
    }

    return dumbVariable;
}

function evaluateResults() {
    if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("Computer chose: " + computerChoice);
        console.log("You chose: " + humanChoice);
        console.log("Human wins.");
        humanScore += 1;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer chose: " + computerChoice);
        console.log("You chose: " + humanChoice);
        console.log("Computer wins.");
        computerScore += 1;
    } else if (computerChoice === "rock" && humanChoice === "rock") {
        console.log("Computer chose: " + computerChoice);
        console.log("You chose: " + humanChoice);
        console.log("You tied.")
        ties += 0;
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        console.log("Computer chose: " + computerChoice);
        console.log("You chose: " + humanChoice);
        console.log("You tied.")
        ties += 0;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("Computer chose: " + computerChoice);
        console.log("You chose: : " + humanChoice);
        console.log("You win.")
        humanScore += 1;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer chose: " + computerChoice);
        console.log("You chose: : " + humanChoice);
        console.log("Computer wins.")
        computerScore += 1;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer chose: " + computerChoice);
        console.log("You chose: " + humanChoice);
        console.log("Computer wins.")
        computerScore += 1;
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
        console.log("Computer chose: " + computerChoice);
        console.log("You chose: " + humanChoice);
        console.log("You tied.")
        ties += 0;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("Computer chose: " + computerChoice);
        console.log("You chose: " + humanChoice);
        console.log("You win.")
        humanScore += 1;
    }

    // console.log(humanScore);
    // humanScore += 1;
    // console.log(humanScore);
    // humanScore += 1;
    // console.log(humanScore);
    // humanScore += 1;
    // console.log(humanScore);
}


// function getNumberOfRounds() {
//     let userInput = document.getElementById('userInput').value;
//     const number = Number(userInput);
//     if (number !== null && !isNaN(number) && Number.isInteger(Number(number))) {
//         console.log(`You chose a good number: ${number}`)
//         document.getElementById('numberofRounds')
//     } else {
//         alert("Your response is invalid.")
//     }
// }

function getNumberOfRounds() {
    let userInput = document.getElementById('userInput').value;
    let number = parseInt(userInput, 10);
    if (number > 0 && Number.isInteger(number)) {
        document.getElementById('numberOfRounds').innerText = `Number of Rounds: ${number}`;
        return number;
    } else {
        alert("Please enter a valid number of rounds.");
        return null;
    }
}



function playGame() {
    let numberOfRounds = getNumberOfRounds();
    if (numberOfRounds) {
        humanScore = 0;  // Reset scores before starting a new game
        computerScore = 0;
        ties = 0;

        for (let x = 1; x <= numberOfRounds; x++) {
            let computerChoice = getComputerChoice();
            let humanChoice = getHumanChoice();
            evaluateResults(computerChoice, humanChoice);
        }

        // Display results
        alert(`Final Scores:\nYour score: ${humanScore}\nComputer score: ${computerScore}\nTies: ${ties}`);
    }
}



// numberOfRounds = getNumberOfRounds();

// function playGame() {
//     for (let x = 1; x <= document.getElementById('userInput'); x++) {
//         computerChoice = getComputerChoice();
//         humanChoice = getHumanChoice();
//         evaluateResults();
//     }
// }

// console.log("Your score is: " + humanScore + ", the computer score is:" + computerScore + ", number of ties:" + ties);
// console.log("Tits.");