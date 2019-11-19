
let trap1={
    tileId: 4,
    penalty: 3,
    message: "Tou just got pushed out of the window. Move back 3 steps"
}
let trap2={
    tileId: 12,
    penalty: 3,
    message: "Tou just got pushed out of the window. Move back 3 steps"
}
let dice, diceRoll, scores, activePlayer;
dice = Math.floor(Math.random() * 6) + 1;


init();


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
        diceDOM.src = 'graphics/img/dice/dice-' + dice + '.png';
        console.log(dice);


    }    
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('.player1Character').classList.toggle('active');
    document.getElementById('.player2Character').classList.toggle('active');
}

// The initial state of the game before starting to play
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    }