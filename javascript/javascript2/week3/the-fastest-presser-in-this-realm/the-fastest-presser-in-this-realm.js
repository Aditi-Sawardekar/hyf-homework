/* Game started value, is set to false,
    when start game is clicked, change its value to true, 
    after settimout finishes, clear set timeout and change the value to false again.
*/

let gameHasStarted = false;

//When the start game button is clicked, get the value of the input. 
const start = document.querySelector("#start");
start.addEventListener("click", startGame)

//Declare the initial value of counter
let countS = 0;

//Output the count of S
const displayCountS = document.querySelector("#s-count");

//Declare the initial value of counter
let countL = 0;

//Output the count of L
const displayCountL = document.querySelector("#l-count");

function startGame() {
    const gameStarted = "Game Started!";
    const gameFinished = "Game Finished";
    const gameStatus = document.querySelector(".display-game-status");
    const gameWinner = document.querySelector(".game-winner");
    let gameDuration = document.querySelector("#duration").value;
    const displayGameCounter = document.querySelector(".game-count-down");

    // Get values of l and s when pressed
    const gameArea = document.querySelector("body");

    // Reset Button
    const reset = document.querySelector("#restart");
    reset.addEventListener("click", resetGame)

    // Game Duration Counter
    const gameCountDown = setInterval(() => {
        displayGameCounter.innerHTML = gameDuration
        gameDuration--
       
        if (gameDuration <= 0) {
            clearInterval(gameCountDown)
        }
    }, 1000)

    if (gameHasStarted === false) {
        gameHasStarted = true;
        gameStatus.innerHTML = gameStarted;
        console.log(gameHasStarted);

        gameArea.addEventListener("keypress", keyCount)

        function keyCount(e) {
            // e.key -> logs the key pressed
          
            if (e.key === "s") {
                countS++
                console.log(countS)
                displayCountS.innerHTML = countS
            } else if (e.key === "l") {
                countL++
                //console.log(countS)
                displayCountL.innerHTML = countL
            }
        }

        gameTime = setTimeout(function (gameDuration) {
            gameStatus.innerHTML = gameFinished;
            confetti()
            gameArea.removeEventListener("keypress", keyCount)

            if (gameHasStarted === true) {
                gameHasStarted = false;
                console.log(gameHasStarted)
                gameArea.removeEventListener("keypress", startGame => {
                    console.log("Game Finished");
                })
            }

            if (countS > countL) {
                gameWinner.innerHTML = (`S is the winner`)
                let confettiSettings = { target: 'div-s' };
            } else if (countS < countL) {
                gameWinner.innerHTML = (`L is the winner`)
            }
            else {
                gameWinner.innerHTML = (`Game is draw`)
            }
        }, gameDuration * 1000);

    }
}

// Reset Game
const resetGame = () => window.location.reload()

// Confetti
function confetti() {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
}
