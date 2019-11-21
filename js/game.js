// some variables
let dice, diceRoll, scores, activePlayer1, player1Character, player2Character;

player1Character = document.getElementById("player1Character");
player2Character = document.getElementById("player2Character");
dice = Math.floor(Math.random() * 6) + 1;
gamePlaying = true;

let player1 = sessionStorage.getItem('player1');
let player2 = sessionStorage.getItem('player2');


function setPlayerImg(){
    let player1Character = document.getElementById("player1img");
    player1Character.src = "graphics/img/icons/" + player1 + ".png";
    let player2Character = document.getElementById("player2img");
    player2Character.src = "graphics/img/icons/" + player2 + ".png";
    }
setPlayerImg();


// Dice 
function game(){
    // Create Dice and spin it
document.querySelector('.btn-roll').addEventListener('click', function() {
    var diceDOM = document.querySelector('.dice');
    // Spin the dice
    if (diceDOM.classList.contains('rotate')) {
        diceDOM.classList.remove('rotate');
      } else {
        diceDOM.classList.add('rotate');
      }
      
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result in DOM
        setTimeout(function(){ 
            diceDOM.src = 'graphics/img/dice/dice-' + dice + '.png'; 
        }, 250);
        // console.log(dice);
    } 

});

} game();
function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('.player1Character').classList.toggle('active');
    document.getElementById('.player2Character').classList.toggle('active');
}

// The initial state of the game before starting to play

document.getElementById("square-29").appendChild(player1Character);
