const options = ["Rock", "Paper", "Scissors"];

const computerChoice = options[Math.floor(Math.random() * options.length)];

const userChoice = prompt("Enter your choice (Rock, Paper, Scissors):").trim();

console.log(`Your choice: ${userChoice}`);
console.log(`Computer's choice: ${computerChoice}`);

if (userChoice === computerChoice) {
    console.log("tie");
} else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
) {
    console.log("winner");
} else {
    console.log("lose");
}

playGame();