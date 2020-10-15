let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const rollBtn = document.querySelector('#start-game');
const resetBtn = document.querySelector('#reset-game');
const p1Score = document.querySelector('#player1-score');
const p2Score = document.querySelector('#player2-score');
const p1Dice = document.querySelector(".p1-di");
const p2Dice = document.querySelector(".p2-di");
const header = document.querySelector('h2');

rollBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

function startGame() {
    const diceRoll = Math.ceil(Math.random() * 6);
    if (player1Turn) {
        console.log("player1");
        player1Score += diceRoll;
        p1Score.innerText = player1Score;
        p1Dice.innerText = diceRoll;
        p1Dice.classList.remove('active');
        p2Dice.classList.add('active');
        player1Turn = false;
        header.innerText = "Player 2 Turn";
        console.log(diceRoll, player1Score, player1Turn);
    } else {
        player2Score += diceRoll;
        p2Score.innerText = player2Score;
        p2Dice.innerText = diceRoll;
        console.log("player2");
        p2Dice.classList.remove('active');
        p1Dice.classList.add('active');
        player1Turn = true;
        header.innerText = "Player 1 Turn";
        console.log(diceRoll, player2Score, player1Turn);
    }

    if (player1Score >= 20) {
        header.innerText = "Player 1 has won!!!";
        rollBtn.style.display = "none";
        resetBtn.style.display = "block";
    } else if (player2Score >= 20) {
        header.innerText = "Player 2 has won!!!"
        rollBtn.style.display = "none";
        resetBtn.style.display = "block";
    }

}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    p1Score.innerText = 0;
    p1Dice.innerText = "-";
    p2Score.innerText = 0;
    p2Dice.innerText = "-";
    rollBtn.style.display = "block";
    resetBtn.style.display = "none";
    header.innerText = "Player 1 Turn";
    p2Dice.classList.remove('active');
    p1Dice.classList.remove('active');
    p1Dice.classList.add('active');
}