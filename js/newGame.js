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

let player1Active = true;

// Found in characterTokens.js
setPlayerImg(); // Set the images of the two players 


function game(){
    // DICE
    let dice = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    // console.log("Dice shows " + dice);
    var diceDOM = document.querySelector('.dice');
    // Spin the dice
    if (diceDOM.classList.contains('rotate')) {
        diceDOM.classList.remove('rotate');
    } else {
        diceDOM.classList.add('rotate');
    }
    // 2. Display the result in DOM 
    setTimeout(function () {
        diceDOM.src = 'graphics/img/dice/dice-' + dice + '.png';
    }, 250);


    // give score to correct player
    if(player1Active){
        document.getElementById("playerWho").innerHTML = "Player 2"; // Add current players name in DOM
        player1.tile += dice; // Add the score from dice to player1.tile
        // From tileMovement.js
        player1.tile = checkTrap(player1.tile); // Check if current tile is a trap
        // From tileMovement.js
        checkWinner(player1.tile); // Check if current player is the winner
        // https://www.geeksforgeeks.org/html-dom-appendchild-method/
        document.getElementById(player1.tile.toString()).appendChild(player1.character);

    } else {
        document.getElementById("playerWho").innerHTML = "Player 1";
        player2.tile += dice;
        player2.tile = checkTrap(player2.tile);
        checkWinner(player2.tile);
        document.getElementById(player2.tile.toString()).appendChild(player2.character);
    }

    // From characterTokens.js
    smallerCharactersOnSameTile(); // Make characters smaller if on same tile
    
    // toggle player if dice is not 6
    if(dice !== 6){
        player1Active = !player1Active;
    }
    // DEBUG 
    // console.log(player1.tile + " vs " + player2.tile);
}

// Move characters to correct tiles
function moveCharacterToTile(player, tile){
    if(player){
        document.getElementById(tile).appendChild(player1.character.src);
    }else{
        document.getElementById(tile).appendChild(player2.character.src);
    }
}

// Default text on dice roller
document.getElementById("playerWho").innerHTML = "Roll dice";










