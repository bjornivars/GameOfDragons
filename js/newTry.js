let player1 = {
    tile: 0, 
    id: 1,
    playerName: sessionStorage.getItem('player1'),
    character: document.getElementById("player1img"),
}
let player2 = {
    tile: 0, 
    id: 2,
    playerName: sessionStorage.getItem('player2'),
    character: document.getElementById("player2img"),
}


// TODO: make order of starting player random 
let player1Active = true;

// Set images to the players
function setPlayerImg() {
    player1.character.src = "graphics/img/icons/" + player1.playerName + ".png";
    player2.character.src = "graphics/img/icons/" + player2.playerName + ".png";
} setPlayerImg();


function game(){
    // DICE
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log("Dice shows " + dice);
    var diceDOM = document.querySelector('.dice');
    // Spin the dice
    if (diceDOM.classList.contains('rotate')) {
        diceDOM.classList.remove('rotate');
    } else {
        diceDOM.classList.add('rotate');
    }
    // 2. Display the result in DOM (meta programming)
    setTimeout(function () {
        diceDOM.src = 'graphics/img/dice/dice-' + dice + '.png';
    }, 250);

    // give score to correct player
    if(player1Active){
        player1.tile += dice;
        // check if current tile is a trap

        // player1.tile = checkTrap(player1.tile);
        checkWinner(player1.tile);
        // https://www.geeksforgeeks.org/html-dom-appendchild-method/
        document.getElementById(player1.tile.toString()).appendChild(player1.character);
    }else{
        player2.tile += dice;
        //player2.tile = checkTrap(player2.tile);
        checkWinner(player2.tile);
        document.getElementById(player2.tile.toString()).appendChild(player2.character);

    }
    
    // toggle player if dice is not 6
    if(dice !== 6){
        player1Active = !player1Active;
    }
    
    
    // DEBUG 
    console.log(player1.tile + " vs " + player2.tile);
}

function moveCharacterToTile(player, tile){

    if(player){
        document.getElementById(tile).appendChild(player1.character.src);
    }else{
        document.getElementById(tile).appendChild(player2.character.src);
    }

}












