let player1 = {
    tile: 0, 
    id: 1,
    playerName: sessionStorage.getItem('player1'),
    player1Character: document.getElementById("player1img"),
    turn: true,
}
let player2 = {
    tile: 0, 
    id: 2,
    playerName: sessionStorage.getItem('player2'),
    player2Character: document.getElementById("player2img"),
    turn: false,
}

let playerActive = {};

function setPlayerImg() {
    player1.player1Character.src = "graphics/img/icons/" + player1.playerName + ".png";
    player2.player2Character.src = "graphics/img/icons/" + player2.playerName + ".png";
} setPlayerImg();


function game(){
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    var diceDOM = document.querySelector('.dice');
    // Spin the dice
    if (diceDOM.classList.contains('rotate')) {
        diceDOM.classList.remove('rotate');
    } else {
        diceDOM.classList.add('rotate');
    }
    //2. Display the result in DOM
    setTimeout(function () {
        diceDOM.src = 'graphics/img/dice/dice-' + dice + '.png';
    }, 250);



    if(player1.turn){
        playerActive = player1;
    }else{
        playerActive = player2;
    }

    if(dice !== 6){
        playerActive.tile = playerActive.tile + dice;
        console.log(playerActive);
        nextPlayer();
    }else{
        playerActive.tile = playerActive.tile + dice;
        console.log(playerActive);
    }






}

function nextPlayer(){
    if(playerActive === player1.turn){
        player1.turn == false;
        player2.turn == true;
    }else{        
        player1.turn == true;
        player2.turn == false;
    }
}




