// some variables
let diceRoll, scores, activePlayer, player1Character, player2Character;
scores = [0, 0];
activePlayer = 0;
diceRollScore = 0;
//player1Character = document.getElementById("player1Character");
//player2Character = document.getElementById("player2Character");
gamePlaying = true;
player1Score = 0;
player2Score = 0;

let player1 = sessionStorage.getItem('player1');
let player2 = sessionStorage.getItem('player2');
player1Character = document.getElementById("player1img");
player2Character = document.getElementById("player2img");

function setPlayerImg() {
    player1Character.src = "graphics/img/icons/" + player1 + ".png";
    player2Character.src = "graphics/img/icons/" + player2 + ".png";
}
setPlayerImg();

// Dice 
function game() {
    // Create Dice and spin it
    document.querySelector('.btn-roll').addEventListener('click', function () {
        var diceDOM = document.querySelector('.dice');
        // Spin the dice
        if (diceDOM.classList.contains('rotate')) {
            diceDOM.classList.remove('rotate');
        } else {
            diceDOM.classList.add('rotate');
        }

        if (gamePlaying) {
            // 1. Random number
            var dice = Math.floor(Math.random() * 6) + 1;

            //2. Display the result in DOM
            setTimeout(function () {
                diceDOM.src = 'graphics/img/dice/dice-' + dice + '.png';
            }, 250);

            if (dice) {
                //Add score
                diceRollScore = dice;
                scores[activePlayer] += diceRollScore;
                console.log("player 1: " + scores[0]);
                console.log("player 2: " + scores[1]);
        
                if (scores[0] == scores[activePlayer]) {
                    setPlayerImg();
                    winner();
                    player1HitRed();
                    let x = scores[0].toString();
            //        console.log(x);
            //        console.log(y);
                    // Place player 1 om the correct tile according to his/hers score
                    document.getElementById(x).appendChild(player1Character);
                    ifDiceRolledSix();
                } else {
            //        console.log("player2 turn");
                    setPlayerImg();
                    winner();
                    player2HitRed();
                    let x = scores[1].toString();
            //        console.log(y);
                    document.getElementById(x).appendChild(player2Character);
                    ifDiceRolledSix();
                }
                smallerCharactersOnSameTile();
                winner();
            }
        }
    });
}
game();
nextPlayer();




