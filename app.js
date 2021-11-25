//define the variables for the scoreboard and the RPS buttons

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//function for generating computer's move

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//function for turning the letter to word

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

//functions for the scenario of Win, Lose and Draw

function win(userChoice, computerChoice) {
    //define who took which move
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice) //user choice can was defined in line 67
    userScore++; //user's score goes up by 1 when winning
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //result description
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() =>  userChoice_div.classList.remove('green-glow'), 300);
}


function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    computerScore++; //computer's score goes up by 1 when user lost
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //result description
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lose...`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    //result description
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}


//function for comparing moves between user and computer and defining conditions 

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("USER WINS.");
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("COMPUTER WINS.");
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("IT'S A DRAW.");
            draw(userChoice, computerChoice);
            break;
    }
}


//RPS buttons

function main() {

rock_div.addEventListener('click', () => game("r"));

paper_div.addEventListener('click', () => game("p"));

scissors_div.addEventListener('click', () => game("s"));

}

//executing the function
main();
