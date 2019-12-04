var trapText = document.getElementById("trapText");
// Check if current tile is a trap
function checkTrap(tile){
    switch (tile) {
        case 4:
            showTrapModal();
            trapText.innerHTML = "You just got pushed out of the window. Move back 2 steps";
            // alert( "You just got pushed out of the window. Move back 2 steps")
            return tile - 2;
        case 12:
            showTrapModal();
            trapText.innerHTML = "Khal Drogo just raped you :( 3 steps back";
            return tile - 3;
        case 19:
            showTrapModal();
            trapText.innerHTML = "Hodor is holding the door shut. Move back 5 steps";
            return tile - 5;
        case 26:
            showTrapModal();
            trapText.innerHTML = "Cersei blew up the city... 3 steps back";
            return tile - 3;
        case 32:
            showTrapModal();
            trapText.innerHTML = "You lost a battle.... Move back 20 steps";
            return tile - 20;
        default:
            return tile;
    }
}

// Check if anyone reaches tile 34 or more
function checkWinner(tile) {
    if (tile >= 34) {
        setPlayerImg();
        $('#winnerGameModal').modal('show');
        if(player1Active){
            document.getElementById("winnerName").innerHTML = "Player 1";
            document.getElementById("winnerImg").src = player1.character.src;
            console.log("player 1 WINS");
        }else {
            document.getElementById("winnerName").innerHTML = "Player 2";
            document.getElementById("winnerImg").src = player2.character.src;
            console.log("player 2 WINS");
        }
    }
}

//
function showTrapModal(){
    $('#trapModal').modal('show');
}

// Close the trap modal
function closeTrapModal(){
    console.log("egm");
$('#trapModal').modal('hide');
}