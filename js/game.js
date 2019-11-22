// some variables
let dice, diceRoll, scores, activePlayer, player1Character, player2Character;
scores = [0, 0];
activePlayer = 0;
roundScore = 0;
//player1Character = document.getElementById("player1Character");
//player2Character = document.getElementById("player2Character");
gamePlaying = true;
player1Score = 0;
player2Score = 0;

let player1 = sessionStorage.getItem('player1');
let player2 = sessionStorage.getItem('player2');
 player1Character = document.getElementById("player1img");
 player2Character = document.getElementById("player2img");

function setPlayerImg(){

    player1Character.src = "graphics/img/icons/" + player1 + ".png";
    player2Character.src = "graphics/img/icons/" + player2 + ".png";
    
//document.querySelector("#square-"+"12").appendChild(player1Character);



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

        if (dice) {
            //Add score
            roundScore = dice;
           // console.log("roundscore = " + roundScore);
            scores[activePlayer] += roundScore;
           // console.log(scores[activePlayer]);
            console.log("player 1: " + scores[0]);
            console.log("player 2: " + scores[1]);

            if(scores[0] == scores[activePlayer]){
                setPlayerImg();
               let x = scores[0].toString();
               console.log(x);
           let y = document.getElementById(x);
           console.log(y);
          // y.appendChild(player1Character);
          document.getElementById(x).appendChild(player1Character);
          nextPlayer();
            }else{
                console.log("player2 turn");
                setPlayerImg();
                let x = scores[1].toString();
                let y = document.getElementById(x);
                console.log(y);
               document.getElementById(x).appendChild(player2Character);
               nextPlayer(); 
               
            }

          //  document.querySelector("#square-" + scores[activePlayer]).appendChild(player1Character);


        } 




    }    

         
    // player1Place.appendChild(player1Character);

});

} game();
function nextPlayer() {
    //Next player
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;


       // activePlayer = player2Character;
    }

 //   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

 //   document.getElementById('.player1Character').classList.toggle('active');
   // document.getElementById('.player2Character').classList.toggle('active');
}

// The initial state of the game before starting to play

