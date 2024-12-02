let playAgain = true; 
let yourscore = 0; 
let robotscore = 0;
let ties = 0;
console.log("Please enter Rock, Paper, or Scissors.");
console.log("Anything other than Rock, Paper, or Scissors will not work!");

while (playAgain) {

    // Prompt the user for their choice and convert it to lowercase
    var humanChoice = prompt("Rock, Paper, or Scissors").trim().toLowerCase();
    
    // Validate user input
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        console.log("Invalid input! Please enter Rock, Paper, or Scissors.");
        continue; // Ask again for a valid choice
    }

    let computerChoice = Math.floor(Math.random() * 3); // Generate random number (0-2)

    // Assign computer choice based on random number
    if (computerChoice === 0) { computerChoice = "rock"; }
    else if (computerChoice === 1) { computerChoice = "paper"; }
    else if (computerChoice === 2) { computerChoice = "scissors"; }

    // Display choices
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    //shhhhhhhh
    if (humanChoice === "hotdog") {
        console.log("Instant Win!");
        yourscore++;
        // Display scoreboard after "Instant Win"
        console.log(`Your score: ${yourscore}, Robot score: ${robotscore}, Ties: ${ties}`);
        continue;
    }

    // Determine the outcome
    if (computerChoice === humanChoice) {
        console.log("It's a TIE!");
        ties++; // Increment ties
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log("You LOSE!");
        robotscore++; //robot's score
    } else {
        console.log("VICTORY!");
        yourscore++; // Player score
    }

    
    console.log(`Your score: ${yourscore}, Robot score: ${robotscore}, Ties: ${ties}`);

    // Check if anyone has reached 5
    if (yourscore === 5) {
        console.log("Human Victory");
        playAgain = false; // Stop the game
    } else if (robotscore === 5) {
        console.log("Robot Win");
        playAgain = false; // Stop the game
    }
}


