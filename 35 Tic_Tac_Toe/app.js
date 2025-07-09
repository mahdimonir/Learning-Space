let boxes = document.querySelectorAll(".box");
let startGameBtn = document.querySelector("#start_btn");
let resetBtn = document.querySelector("#reset_btn");
let againBtn = document.querySelector("#again_btn");
let startContainer = document.querySelector(".start-container");
let gameContainer = document.querySelector(".game-container");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true // Player O

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const startBtnClick = () => {
    startContainer.style.display = "none";
    gameContainer.style.display = "block";
    msgContainer.style.display = "none";
    resetGame();
};

const winingMsg = () => {
    startContainer.style.display = "none";
    gameContainer.style.display = "none";
    msgContainer.style.display = "block";

};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    // msg.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){ // Player O
            box.innerText = "O";
            box.style.color = "blue";
            turnO = false;
        } else { // Player X
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        };
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    // msg.classList.remove("hide");
    disableBoxes();
    winingMsg();
};

const showDraw = () => {
    msg.innerText = `The game is Draw`;
    winingMsg();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

const checkDraw = () => {
    
}

startGameBtn.addEventListener("click", startBtnClick);
resetBtn.addEventListener("click", resetGame);
againBtn.addEventListener("click", startBtnClick);