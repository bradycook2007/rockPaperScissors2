// This is a Playable Rock paper Scissors game through java
console.log("please capitalize the first letter of your choice, thanks!");


var humanChoice = prompt("Rock, Paper, or Scissors");
var computerChoice = Math.random(
    0-2
);

//This section deides what the computer chooses
if (computerChoice = 0)
{ computerChoice = "Rock"};
if (computerChoice = 1)
    { computerChoice = "Paper"};
if (computerChoice = 2)
    { computerChoice = "Scissors"};


// This section determines the outcome of the game, winning or losing

if (computerChoice == "Paper" && humanChoice == "Rock"){
    console.log; ("You    LOSE");
};
if (computerChoice ==  humanChoice){
    console.log ("It's A TIE!")
};

if (computerChoice == "Rock" && humanChoice == "Scissors"){
    console.log; ("You    LOSE");
};
if (computerChoice == "Scissors" && humanChoice == "Paper"){
    console.log; ("You    LOSE");
};
if (computerChoice == "Paper" && humanChoice == "Rock"){
    console.log; ("You    LOSE");
};
if (computerChoice == "Paper" && humanChoice == "Scissors"){
    console.log; ("VICTORY!");
};
if (computerChoice == "Scissors" && humanChoice == "Rock"){
    console.log; ("VICTORY!");
};
if (computerChoice == "Rock" && humanChoice == "Paper"){
    console.log; ("VICTORY!");
};



let yourscore= 0
let robotscore= 0
// scoreboard
if (computerChoice == "Rock" && humanChoice == "Paper"){
    console.log ("your score",yourscore + 1, "robot  score", robotscore )
};
if (computerChoice == "Scissors" && humanChoice == "Rock"){
    console.log ("your score",yourscore + 1, "robot  score", robotscore )
};
if (computerChoice == "Paper" && humanChoice == "Scissors"){
    console.log ("your score",yourscore + 1, "robot  score", robotscore )
};
if (computerChoice == "Scissors" && humanChoice == "Paper"){
    console.log ("your score",yourscore, "robot  score", robotscore + 1 )
};
if (computerChoice == "Rock" && humanChoice == "Scissors"){
    console.log ("your score",yourscore, "robot  score", robotscore + 1 )
};
if (computerChoice == "Paper" && humanChoice == "Rock"){
    console.log ("your score",yourscore, "robot  score", robotscore + 1 )
};