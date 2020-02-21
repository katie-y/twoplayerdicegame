// set variables

const newGame = document.getElementById("newGameBtn");
const rollBtn = document.getElementById("rollBtn");
const holdBtn = document.getElementById("holdBtn");
const startingScreen = document.querySelector(".startOrWin");
const gameArea = document.querySelector(".gameArea");
const winnersMsg = document.getElementById("msg");
const diceImage = document.querySelector("#image"); // define image to change

let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");

let activePlayer = 1; // player 1 starts
let totalScore = [0, 0, 0]; // first 0 so the other two match the player number (array starts at 0)
let currentScore = [0, 0, 0];

// hide image and buttons
gameArea.style.display = "none"; // game area hidden
diceImage.style.visibility = "hidden"; // dice hidden on starting game
winnersMsg.style.display = "none";




// roll die

rollBtn.addEventListener("click", () => {

    let num = Math.floor(Math.random() * 6 + 1); // generate random num
    diceImage.setAttribute("src", `./img/dice${num}.png`); // change image source
    diceImage.style.visibility = "visible"; // show image
    currentScore[activePlayer] += num; // sum up the die scores

    if (num == 1) {
        currentScore[activePlayer] = 0;
        document.getElementById(`currentScore${[activePlayer]}`).innerHTML = currentScore[activePlayer];
        nextPlayer();
    }
    else if (currentScore[activePlayer] + totalScore[activePlayer] > 20) {
        const nameBox1 = document.getElementById("player1NameEntry");
        const nameBox2 = document.getElementById("player2NameEntry");
        startingScreen.style.display = "block";
        if (activePlayer == 1){
            winnersMsg.innerHTML = `Player ${activePlayer} wins! Well done ${nameBox1.value}!`
        } else {
            winnersMsg.innerHTML = `Player ${activePlayer} wins! Well done ${nameBox2.value}!`

        }

        winnersMsg.style.display = "block";
        gameArea.style.display = "none";
    }
    else {
        document.getElementById(`currentScore${[activePlayer]}`).innerHTML = currentScore[activePlayer];
    }

})

// press new game button

newGameBtn.addEventListener("click", () => {
    startingScreen.style.display = "none";
    gameArea.style.display = "block";
    diceImage.style.visibility = "hidden"
    document.getElementById("currentScore1").innerHTML = 0;
    document.getElementById("currentScore2").innerHTML = 0;
    document.getElementById("totalScore1").innerHTML = 0;
    document.getElementById("totalScore2").innerHTML = 0;
    currentScore = [0, 0, 0];
    totalScore = [0, 0, 0];
    activePlayer = 1;
    // enter names
    const nameBox1 = document.getElementById("player1NameEntry");
    document.getElementById("player1Name").innerHTML = nameBox1.value;
    const nameBox2 = document.getElementById("player2NameEntry");
    document.getElementById("player2Name").innerHTML = nameBox2.value;

    player1.style.border = "white 1em solid";
    player2.style.border = "none";
})

// hold button

holdBtn.addEventListener("click", () => {
    totalScore[activePlayer] += currentScore[activePlayer];
    currentScore[activePlayer] = 0;
    document.getElementById(`currentScore${[activePlayer]}`).innerHTML = 0;
    document.getElementById(`totalScore${[activePlayer]}`).innerHTML = totalScore[activePlayer];
    nextPlayer();
})

// next player function

const nextPlayer = () => {
    if (activePlayer == 1) {
        activePlayer = 2;
        player2.style.border = "white 1em solid";
        player1.style.border = "none";
    } else {
        activePlayer = 1;
        player1.style.border = "white 1em solid";
        player2.style.border = "none";
    }
}
