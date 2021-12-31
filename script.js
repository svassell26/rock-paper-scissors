let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const pick_user = document.querySelector("#playerpick");
const pick_computer = document.querySelector("#computerpick");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function tie(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    pick_user.innerHTML = "You picked: " + userChoice;
    pick_computer.innerHTML = "Computer picked: " + computerChoice;
    result_p.innerHTML = " It's a Tie!";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    pick_user.innerHTML = "You picked: " + userChoice;
    pick_computer.innerHTML = "Computer picked: " + computerChoice;
    result_p.innerHTML = "You Win! " + userChoice + " beats " + computerChoice;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    pick_user.innerHTML = "You picked: " + userChoice;
    pick_computer.innerHTML = "Computer picked: " + computerChoice;
    result_p.innerHTML = "You Lose! " + computerChoice + " beats " + userChoice;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("computer: " + computerChoice);
    console.log("user = " + userChoice);
    if (userChoice === computerChoice) {
        tie(userChoice, computerChoice);
    } else if ((userChoice === "Rock" && computerChoice === "Scissors") || (userChoice === "Paper" && computerChoice === "Rock") || (userChoice === "Scissors" && computerChoice === "Paper")) {
        win(userChoice, computerChoice);
    } else {
        lose(userChoice, computerChoice);
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("Rock");
    });

    paper_div.addEventListener('click', function() {
        game("Paper");
    });

    scissors_div.addEventListener('click', function() {
        game("Scissors");
    });
}

main();






