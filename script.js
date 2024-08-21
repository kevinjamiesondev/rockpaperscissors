console.log("Hello World");

console.log("Hello World!");

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]; // Choices for computer to play
    let getComputerChoice = (Math.random(Math.floor) * choice.length);
    return choice[randomIndex];
}

console.log(getComputerChoice);

function getHumanChoice() {
    let userInput = prompt("Enter your choice (rock, paper, or scissors):");

    userInput = userInput.toLowerCase();

    if (userInput === "rock" || userInput === "paper" || "scissors") {
        return userInput;
    } else {
        return "Invaid choice. Please enter rock, paper, or scissors.";
    }
}

console.log(getHumanChoice());