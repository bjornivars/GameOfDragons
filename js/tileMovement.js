// Check if current tile is a trap
function checkTrap(tile){
    switch (tile) {
        case 4:
            alert( "Tou just got pushed out of the window. Move back 2 steps")
            return tile - 2;
        case 12:
            alert( "Tou just got pushed out of the window. Move back 3 steps")
            return tile - 3;
        case 19:
            alert( "Tou just got pushed out of the window. Move back 5 steps")
            return tile - 5;
        case 26:
            alert( "Tou just got pushed out of the window. Move back 3 steps")
            return tile - 3;
        case 35:
            alert( "Tou just got pushed out of the window. Move back 20 steps")
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
            document.getElementById("winnerImg").src = player1.character.src;
            console.log("player 1 WINS");
        }else {
            document.getElementById("winnerImg").src = player2.character.src;
            console.log("player 2 WINS");
        }
    }
}