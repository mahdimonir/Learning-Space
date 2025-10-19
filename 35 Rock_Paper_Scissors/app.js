let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgBox = document.querySelector("#msg");

const userScoreBox = document.querySelector("#user-score")
const compScoreBox = document.querySelector("#comp-score")

const genCompChoice = () => {
    // rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msgBox.innerText = "Game is draw, play again!";
    msgBox.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScoreBox.innerText = userScore;
        msgBox.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msgBox.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreBox.innerText = compScore;
        msgBox.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msgBox.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})